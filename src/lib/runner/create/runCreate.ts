import stores, { db, increaseVersion, version, storesColumns } from "../stores";

export default function runCreate(clauses: {keyword: string, items:any[]}[]) {
    const [whatCreate, tableName, tableStructure] = clauses[0].items as [string, string, string];
    if(whatCreate.toUpperCase() !== "TABLE") {
        throw new Error("CREATE clause can only make tables. Instead got "+whatCreate);
    }
    
    // see https://dexie.org/docs/Version/Version.stores() for the format of the string
    let stringStructure = "";

    let newStoresColumns: string[] = [];

    let fixedTableStructure = tableStructure;
    if(fixedTableStructure[0] === "(") {
        // if it starts with one, it must end ith one otherwise an error would have been thrown
        fixedTableStructure = fixedTableStructure.slice(1, fixedTableStructure.length-1);
    }

    let columns = fixedTableStructure.split(",");
    for(var n = 0; n < columns.length; n++) {
        let column = columns[n];
        // remove starting spaces
        let sliceFrom = 0;
        while(column[sliceFrom] === " ")
            sliceFrom++;
        if(sliceFrom !== 0)
            column = column.slice(sliceFrom);

        let [columnName, ...flags] = column.split(" ");

        let canPushToStoreColumns = true;

        flags = flags.map((val)=>{
            switch(val) {
                case "AUTO_INCREMENT":
                    return "++";
                case "UNIQUE":
                    return "&";
                case "NO_INDEX": // Can't `continue` across a `map` call, so we have to use `includes` later.
                    if(n === 0) { // first column is primary key; must be indexable
                        throw new Error("Saw NO_INDEX flag on first column: The first column is the primary key; It must be indexable.")
                    }
                    canPushToStoreColumns = false;
                    return "NO_INDEX";
            }
        });

        if(canPushToStoreColumns) {
            newStoresColumns.push(columnName);
        }

        if(flags.includes("NO_INDEX")) {
            continue;
        }

        stringStructure += `${flags.join("")}${columnName},`
    }

    

    stringStructure = stringStructure.slice(0, stringStructure.length-1); // slice to remove ending comma

    let newPrimaryKey = newStoresColumns[0];
    newStoresColumns = newStoresColumns.slice(1);

    // TODO: .sort() will almost certainly cause issues in the future. The problem is that Dexie changes the indexes from when they were first made
    if(stores[tableName] && areArraysEqual(stores[tableName].schema.indexes.map(obj=>obj.name).sort(), newStoresColumns.sort()) && stores[tableName].schema.primKey.name === newPrimaryKey) {
        // new is same as old, don't need to re-add
        return Promise.resolve();
    }
    increaseVersion();

    if(db.isOpen()) {
        db.close();
    }
    Object.defineProperty(stores, tableName, {
        // @ts-ignore
        get: ()=>{ return db[tableName]; },
        configurable: true
    });

    // The following allows multiple tables to be created, one after another. Dexie makes versioning look synchronous but it really isn't, meaning it breaks when we have to call db.close() earlier.
    return new Promise((resolve, reject)=>{
        db.on("ready", ()=>{
            storesColumns[tableName] = newStoresColumns;
            resolve();
        });
        db.version(db.verno + 1).stores({
            [tableName]: stringStructure
        });
        setTimeout(()=>{
            reject("Opening the database took longer than expected.");
        }, 4000);
        db.open()
        .catch((reason)=>{
            reject("There was a problem opening the database. "+reason);
        });
    });
}

const areArraysEqual = (a: Array<any>, b: Array<any>)=>{
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}