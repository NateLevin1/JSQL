import stores, { db, increaseVersion, version, storesColumns } from "../stores";

export default function runCreate(clauses: {keyword: string, items:any[]}[]) {
    const [whatCreate, tableName, tableStructure] = clauses[0].items as [string, string, string];
    if(whatCreate.toUpperCase() !== "TABLE") {
        throw new Error("CREATE clause can only make tables. Instead got "+whatCreate);
    }
    storesColumns[tableName] = [];
    increaseVersion();
    // see https://dexie.org/docs/Version/Version.stores() for the format of the string
    let stringStructure = "";

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
                    canPushToStoreColumns = false;
                    return "++";
                case "UNIQUE":
                    return "&";
                case "NO_INDEX": // Can't `continue` across a `map` call, so we have to use `includes` later.
                    if(n === 0) { // first column is primary key; must be indexable
                        throw new Error("Saw NO_INDEX flag on first column: The first column is the primary key; It must be indexable.")
                    }
                    return "NO_INDEX";
            }
        });

        if(canPushToStoreColumns) {
            storesColumns[tableName].push(columnName);
        }

        if(flags.includes("NO_INDEX")) {
            continue;
        }

        stringStructure += `${flags.join("")}${columnName},`
    }

    

    stringStructure = stringStructure.slice(0, stringStructure.length-1); // slice to remove ending comma
    if(db.isOpen()) {
        db.close();
    }
    Object.defineProperty(stores, tableName, {
        // @ts-ignore
        get: ()=>{ return db[tableName]; },
        configurable: true
    });
    return new Promise(resolve=>{
        db.on("ready", ()=>{
            resolve();
        });
        db.version(version).stores({
            [tableName]: stringStructure
        });
        db.open();
    });
}