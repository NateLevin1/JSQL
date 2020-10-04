import stores from "../stores";
import Dexie from "dexie";

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

const getContents = (store: Dexie, wherePredicate: (undefined|{left: string, operator: string, right: string}))=>{
    let shouldToArray = store;
    if(wherePredicate) {
        // @ts-ignore
        shouldToArray = shouldToArray.where(wherePredicate.left);
        const right = eval(wherePredicate.right)
        switch(wherePredicate.operator) {
            case "=":
                // @ts-ignore
                shouldToArray = shouldToArray.equals(right);
                break;
            case "IGNORECASE=":
                // @ts-ignore
                shouldToArray = shouldToArray.equalsIgnoreCase(right);
                break;
            case "<>":
            case "!=":
                // @ts-ignore
                shouldToArray = shouldToArray.notEqual(right);
                break;
            case ">":
                // @ts-ignore
                shouldToArray = shouldToArray.above(right);
                break;
            case ">=":
                // @ts-ignore
                shouldToArray = shouldToArray.aboveOrEqual(right);
                break;
            case "<":
                // @ts-ignore
                shouldToArray = shouldToArray.below(right);
                break;
            case "<=":
                // @ts-ignore
                shouldToArray = shouldToArray.belowOrEqual(right);
                break;
        }
    }
    
    // @ts-ignore - typescript doesn't like Dexie, so this is the only solution without knowing the column name
    return shouldToArray.toArray();
}