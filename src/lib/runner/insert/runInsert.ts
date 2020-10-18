import stores, { storesColumns } from "../stores";

export default function runInsert(clauses: {keyword: string, items:any[]}[]) {
    const [insertClause, valuesClause] = clauses;
    const tableName = insertClause.items[1];
    let   [valuesExpr] = valuesClause.items as [string];
    const {keyword: shouldBeValues} = valuesClause;

    // TODO: Add optional expression after tableName to specify which columns to add data to

    if(shouldBeValues != "VALUES") {
        throw new Error("INSERT clause must be followed by VALUE clause. Instead got "+shouldBeValues);
    }

    const table = stores[tableName];
    if(!table) {
        throw new Error("No database with name "+tableName);
    }
    
    // valuesExpr is in the form (1,'joe'), (2, 'bill')
    let newRows = valuesExpr.split(/, ?(?= {0,}\()/g);
    let processedNewRows: {[key: string]: any}[] = [];
    for (var i = 0; i < newRows.length; i++) {
        let row = newRows[i];
        // remove parens
        row = row.slice(1, row.length-1);

        let valAtColumns = row.split(",").map(val=>{  // eval to turn string numbers into numbers etc
            return Function(`"use strict"; return (${val})`)();
        });
        processedNewRows[i] = {};

        for(var j = 0; j < storesColumns[tableName].length; j++) {
            processedNewRows[i][storesColumns[tableName][j]] = valAtColumns[j];
        }
    }

    return table.bulkAdd(processedNewRows);
}