import { IDatabase } from "../databases";
import where, { WherePredicate } from "../where/where";

export default function runDelete(clauses: {keyword: string, items:any[]}[], database: IDatabase) {
    let tableNames: string[] = clauses[0].items[1];
    tableNames.forEach((tblName: string) => {
        if(tblName === "*") {
            tableNames.push(...Object.keys(database.storesColumns));
        }
    });
    tableNames = tableNames.filter(val=>val!=="*");

    const wherePredicate: WherePredicate = clauses[1]?.items[0];
    let promises: Promise<number>[] = [];
    for(const name of tableNames) {
        const table = database.stores[name];
        if(table === undefined) {
            throw `Table ${name} does not exist.`;
        }

        let collection = table.toCollection();
        if(wherePredicate) {
            // if there is a where clause, use it
            collection = where(table, wherePredicate);
        } // otherwise just delete all

        // see https://dexie.org/docs/Collection/Collection.delete()
        promises.push(collection.delete());
    }
    return Promise.all(promises);
}