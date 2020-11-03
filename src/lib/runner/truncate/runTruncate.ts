import { IDatabase } from "../databases";

export default function runTruncate(clauses: {keyword: string, items:any[]}[], database: IDatabase) {
    const tableName = clauses[0].items[1];
    const table = database.stores[tableName];
    if(table === undefined) {
        throw `Table ${tableName} does not exist.`;
    }
    return table.clear();
}