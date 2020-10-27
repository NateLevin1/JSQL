import parseIdentifier from "../../parser/parseIdentifier/parseIdentifier";
import { IDatabase } from "../databases";

export default function runInsert(clauses: {keyword: string, items:any[]}[], database: IDatabase) {
    const [insertClause, valuesClause] = clauses;
    const [into, tableName, columns] = insertClause.items as ["INTO", string, string];
    let   [valuesExpr] = valuesClause.items as [string];
    const {keyword: shouldBeValues} = valuesClause;

    // TODO: #5 Add optional expression after tableName to specify which columns to add data to

    if(shouldBeValues != "VALUES") {
        throw new Error("INSERT clause must be followed by VALUE clause. Instead got "+shouldBeValues);
    }

    const table = database.stores[tableName];
    if(!table) {
        throw `Table ${tableName} does not exist.`;
    }

    let columnsArr = database.storesColumns[tableName];

    if (columns) {
        let noParensColumns = columns;
        // remove parens
        noParensColumns = columns.slice(1, noParensColumns.length - 1);

        columnsArr = noParensColumns.split(',').map(val => { let x = parseIdentifier(val); return x.identifier + x.rest; });
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

        for(var j = 0; j < columnsArr.length; j++) {
            processedNewRows[i][columnsArr[j]] = valAtColumns[j];
        }
    }

    // TODO: put null for all indexable values

    return table.bulkAdd(processedNewRows);
}