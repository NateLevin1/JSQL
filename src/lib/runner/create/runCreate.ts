import { db, increaseVersion, version } from "../stores";

export default function runCreate(clauses: {keyword: string, items:any[]}[]) {
    const [whatCreate, tableName, tableStructure] = clauses[0].items as [string, string, string];
    if(whatCreate != "TABLE") {
        throw new Error("CREATE clause can only make tables. Instead got "+whatCreate);
    }
    increaseVersion();
    // see https://dexie.org/docs/Version/Version.stores() for the format of the string
    let stringStructure = "";

    let fixedTableStructure = tableStructure;
    if(fixedTableStructure[0] === "(") {
        // if it starts with one, it must end ith one otherwise an error would have been thrown
        fixedTableStructure = fixedTableStructure.slice(1, fixedTableStructure.length-1);
    }

    let columns = fixedTableStructure.split(",");
    for(let column of columns) {
        // remove starting spaces
        let sliceFrom = 0;
        while(column[sliceFrom] === " ")
            sliceFrom++;
        if(sliceFrom !== 0)
            column = column.slice(sliceFrom);

        let [columnName, ...flags] = column.split(" ");

        flags = flags.map((val)=>{
            switch(val) {
                case "AUTO_INCREMENT":
                    return "++";
                case "UNIQUE":
                    return "&";
                case "NO_INDEX": // Can't `continue` across a `map` call, so we have to use `includes` later.
                    return "NO_INDEX";
            }
        });

        if(flags.includes("NO_INDEX")) {
            continue;
        }

        stringStructure += `${flags.join("")}${columnName},`
    }

    stringStructure = stringStructure.slice(0, stringStructure.length-1); // slice to remove ending comma

    db.version(version).stores({
        [tableName]: stringStructure
    });
    db.open();
}