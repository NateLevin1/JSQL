import { Table } from "dexie";
import stores from "../stores";

export default async function runSelect(clauses: {keyword: string, items:any[]}[]) {
    const column = clauses[0].items[0];
    let storeNames = Object.keys(stores); // this is the same as star
    let wherePredicate;

    for(const obj of clauses) {
        switch(obj.keyword) {
            case "SELECT":
                continue;
            case "FROM":
                const name = obj.items[0];
                if(name !== "*") { // if it is, it is the same as doing nothing
                    storeNames = [name];
                }
                break;
            case "WHERE":
                wherePredicate = obj.items[0]; // left, right, operator
                break;
        }
    }

    let results = [];
    for(const name of storeNames) {
        const store = stores[name];
        if(column === "*") {
            results.push(await getContents(store, wherePredicate));
        } else {
            // @ts-ignore
            results.push((await getContents(store, wherePredicate)).map(objstore=>objstore[column]));
        }
    }

    if(storeNames.length == 1) {
        // don't need an extra wrapper array, remove it
        results = results[0];
    }

    return Promise.all(results);
}

const getContents = (store: Table, wherePredicate: (undefined|{left: string, operator: string, right: string}))=>{
    let shouldToArray = store as any;
    if(wherePredicate) {
        shouldToArray = shouldToArray.where(wherePredicate.left);
        const right = eval(wherePredicate.right)
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