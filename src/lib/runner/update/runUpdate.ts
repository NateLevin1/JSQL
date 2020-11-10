import parsePredicate from "../../parser/parsePredicate/parsePredicate";
import { IDatabase } from "../databases";
import where from "../where/where";

export default function runUpdate(clauses: {keyword: string, items:any[]}[], database: IDatabase) {
    // the table(s) which will be updated
    let tablesToUpdate: string[] = clauses[0].items[0];
    tablesToUpdate.forEach((tblName: string) => {
        if(tblName === "*") {
            tablesToUpdate.push(...Object.keys(database.storesColumns));
        }
    });
    tablesToUpdate = tablesToUpdate.filter(val=>val!=="*");

    let modificationPredicates: ReturnType<typeof parsePredicate>[] = [];
    let wherePredicate;

    for(const clause of clauses.slice(1)) { // slice(1) to ignore the UPDATE clause since we already handled it
        switch(clause.keyword) {
            case "SET":
                modificationPredicates = clause.items[0];
                break;
            case "WHERE":
                wherePredicate = clause.items[0];
                break;
        }
    }

    // represents the updates that should be made.
    let updatesToBeMade: {column: string, newValue: string|unknown, isDependantOnRow: boolean}[] = [];
    for(const predicate of modificationPredicates) {
        let {left: colName, operator, right:newValAsString} = predicate;

        if(operator !== "=") {
            throw `Only the assignment operator ('=') can be used in a SET clause. Instead got ${predicate.operator}.`;
        }

        let newVal = newValAsString;
        let isDependantOnRow = true;
        if (!newValAsString.includes(colName)) {
            // if the string value does not reference the column, calculate it ahead of time
            newVal = eval(newValAsString);
            isDependantOnRow = false;
        }
        updatesToBeMade.push({column: colName, newValue: newVal, isDependantOnRow});
    }

    let modifyPromises: Promise<number>[] = [];
    for(const tableName of tablesToUpdate) {
        const table = database.stores[tableName];
        if(table === undefined) {
            throw `Table ${tableName} does not exist.`;
        }

        // create a collection so we can modify it
        let collection = table.toCollection();
        if(wherePredicate) {
            collection = where(table, wherePredicate);
        }

        // modify the collection according to the SET clause
        modifyPromises.push(collection.modify((row)=>{
            // we try to run eval as few times as possible here since it is bad for performance, however
            // we have to run it if the newValue is dependent on the row's value
            for(const updates of updatesToBeMade) {
                if(!updates.isDependantOnRow) {
                    // this means we have already eval-ed and we can just set the new value
                    row[updates.column] = updates.newValue;
                } else {
                    // this means the new value is dependent on the old one; we need to eval it for each row
                    row[updates.column] = eval(`let ${updates.column} = row[updates.column]; ${updates.newValue};`);
                }
            }
        }));
    }

    return Promise.all(modifyPromises);
}