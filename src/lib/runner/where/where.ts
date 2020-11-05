import { Table } from "dexie";

export interface WherePredicate {
    left: string,
    operator: string,
    right: string
}
export default function where(store: Table, wherePredicate: WherePredicate) {
    let collection = store.toCollection();
    let whereVal = store.where(wherePredicate.left);
    const right = eval(wherePredicate.right);
    switch (wherePredicate.operator) {
        case "=":
            collection = whereVal.equals(right);
            break;
        case "IGNORECASE=":
            collection = whereVal.equalsIgnoreCase(right);
            break;
        case "<>":
        case "!=":
            collection = whereVal.notEqual(right);
            break;
        case ">":
            collection = whereVal.above(right);
            break;
        case ">=":
            collection = whereVal.aboveOrEqual(right);
            break;
        case "<":
            collection = whereVal.below(right);
            break;
        case "<=":
            collection = whereVal.belowOrEqual(right);
            break;
    }
    return collection;
}