import { Table } from "dexie";
import { IDatabase } from "../databases";

export default async function runSelect(clauses: {keyword: string, items:any[]}[], database: IDatabase) {
    const columns: string[] = clauses[0].items[0];
    let storeNames: string[] = []; // this is the same as star
    let wherePredicate: (undefined|{left: string, operator: string, right: string});

    for(const obj of clauses) {
        switch(obj.keyword) {
            case "SELECT":
                continue;
            case "FROM":
                const names = obj.items[0];
                for(const name of names) {
                    if(name === "*") {
                        storeNames.push(...Object.keys(database.stores));
                    } else {
                        storeNames.push(name);
                    }
                }
                break;
            case "WHERE":
                wherePredicate = obj.items[0]; // left, right, operator
                break;
        }
    }

    if(storeNames.length === 0) {
        // if it is empty (no from clause) then set it as if it were *
        storeNames.push(...Object.keys(database.stores));
    }

    let resultsByStore: {[key:string]:any} = {};
    for(const name of storeNames) {
        const store = database.stores[name];
        let result: ({[key:string]:any}|any)[] = [];
        let storeContents = await getContents(store, wherePredicate);
        for(const item of storeContents) {
            let returnedItem: ({[key:string]:any}|any) = {};
            for(const column of columns) {
                if(column === "*") {
                    returnedItem[column] = item;
                } else {
                    returnedItem[column] = item[column];
                }
            }

            // remove wrapper object
            if(columns.length === 1) {
                returnedItem = returnedItem[columns[0]];
            }

            result.push(returnedItem);
        }
        
        resultsByStore[name] = result;
    }

    if(storeNames.length === 1) {
        // don't need an extra wrapper object, remove it
        // @ts-ignore - since this changes `resultsByStore` typescript gets angry
        resultsByStore = resultsByStore[Object.keys(resultsByStore)[0]];
    }

    return resultsByStore;
}

const getContents = (store: Table, wherePredicate: (undefined|{left: string, operator: string, right: string}))=>{
    let shouldToArray = store as any;
    if(wherePredicate) {
        shouldToArray = shouldToArray.where(wherePredicate.left);
        const right = eval(wherePredicate.right);
        switch(wherePredicate.operator) {
            case "=":
                shouldToArray = shouldToArray.equals(right);
                break;
            case "IGNORECASE=":
                shouldToArray = shouldToArray.equalsIgnoreCase(right);
                break;
            case "<>":
            case "!=":
                shouldToArray = shouldToArray.notEqual(right);
                break;
            case ">":
                shouldToArray = shouldToArray.above(right);
                break;
            case ">=":
                shouldToArray = shouldToArray.aboveOrEqual(right);
                break;
            case "<":
                shouldToArray = shouldToArray.below(right);
                break;
            case "<=":
                shouldToArray = shouldToArray.belowOrEqual(right);
                break;
        }
    }
    return shouldToArray.toArray();
}