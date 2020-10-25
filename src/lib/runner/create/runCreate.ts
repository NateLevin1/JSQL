import { IDatabase } from "../databases";
import addDatabase from "./addDatabase";

export default function runCreate(clauses: {keyword: string, items:any[]}[], database: IDatabase) {
    const [providedCreate, name, tableStructure] = clauses[0].items as [string, string, (string|undefined)];
    
    const whatCreate = providedCreate.toUpperCase();
    
    if(whatCreate === "TABLE") {
        if(!tableStructure) {
            throw "When CREATEing TABLEs a structure must be provided."
        }
        // see https://dexie.org/docs/Version/Version.stores() for the format of the string
        let stringStructure = "";

        let newStoresColumns: string[] = [];

        let fixedTableStructure = tableStructure;
        if (fixedTableStructure[0] === "(") {
            // if it starts with one, it must end with one otherwise an error would have been thrown
            fixedTableStructure = fixedTableStructure.slice(1, fixedTableStructure.length - 1);
        }

        let columns = fixedTableStructure.split(",");
        for (var n = 0; n < columns.length; n++) {
            let column = columns[n];
            // remove starting spaces
            let sliceFrom = 0;
            while (column[sliceFrom] === " ")
                sliceFrom++;
            if (sliceFrom !== 0)
                column = column.slice(sliceFrom);

            let [columnName, ...flags] = column.split(" ");

            let canPushToStoreColumns = true;

            flags = flags.map((val) => {
                switch (val) {
                    case "AUTO_INCREMENT":
                        return "++";
                    case "UNIQUE":
                        return "&";
                    case "NO_INDEX": // Can't `continue` across a `map` call, so we have to use `includes` later.
                        if (n === 0) { // first column is primary key; must be indexable
                            throw new Error("Saw NO_INDEX flag on first column: The first column is the primary key; It must be indexable.")
                        }
                        canPushToStoreColumns = false;
                        return "NO_INDEX";
                }
            });

            if (canPushToStoreColumns) {
                newStoresColumns.push(columnName);
            }

            if (flags.includes("NO_INDEX")) {
                continue;
            }

            stringStructure += `${flags.join("")}${columnName},`
        }



        stringStructure = stringStructure.slice(0, stringStructure.length - 1); // slice to remove ending comma

        let newPrimaryKey = newStoresColumns[0];
        newStoresColumns = newStoresColumns.slice(1);

        // TODO: .sort() will almost certainly cause issues in the future. The problem is that Dexie changes the indexes from when they were first made
        if (database.stores[name] && areArraysEqual(database.stores[name].schema.indexes.map(obj => obj.name).sort(), newStoresColumns.sort()) && database.stores[name].schema.primKey.name === newPrimaryKey) {
            // new is same as old, don't need to re-add
            return Promise.resolve();
        }

        if (database.db.isOpen()) {
            database.db.close();
        }
        Object.defineProperty(database.stores, name, {
            // @ts-ignore
            get: () => { return database.db[name]; },
            configurable: true
        });

        // The following allows multiple tables to be created, one after another. Dexie makes versioning look synchronous but it really isn't, meaning it breaks when we have to call db.close() earlier.
        return new Promise((resolve, reject) => {
            let hasReadied = false;
            database.db.on("ready", () => {
                if (!hasReadied) {
                    hasReadied = true;
                    // because upgrade doesn't run on first
                    database.storesColumns[name] = newStoresColumns;
                    resolve();
                }
            });
            database.db.version(database.db.verno + 1).stores({
                [name]: stringStructure
            }).upgrade((trans) => {
                // runs after the db has been made. normally you would
                // use this to change stuff in the db, but we don't need to here
                database.storesColumns[name] = newStoresColumns;
                const tbl = trans.table(name);
                return tbl.toCollection().modify((obj)=>{
                    for(var index of tbl.schema.indexes.map(obj=>obj.name)) {
                        if(obj[index] === undefined) {
                            obj[index] = null;
                        }
                    }
                }).then(()=>{ resolve(); });
            });
            setTimeout(() => {
                reject("Opening the database took longer than expected.");
            }, 4000);
            database.db.open()
                .catch((reason) => {
                    reject("There was a problem opening the database. " + reason);
                });
        });
    } else if(whatCreate === "DATABASE") {
        return addDatabase(name);
    } else {
        throw "Must create DATABASE or TABLE in CREATE clause. Instead found "+whatCreate+".";
    }
}

const areArraysEqual = (a: Array<any>, b: Array<any>)=>{
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}