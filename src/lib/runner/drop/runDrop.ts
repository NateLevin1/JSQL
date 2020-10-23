import databases, { IDatabase } from "../databases";
import deleteTable from "./deleteTable";

export default function runDrop(clauses: {keyword: string, items:any[]}[], database: IDatabase) {
    const [typeToDrop, nameToBeDropped] = clauses[0].items as [string, string];
    let uppercaseTypeToDrop = typeToDrop.toUpperCase();
    if(uppercaseTypeToDrop === "TABLE") {
        return deleteTable(nameToBeDropped, database);
    } else if(uppercaseTypeToDrop === "DATABASE") {
        return databases[nameToBeDropped].db.delete();
    } else {
        throw "Must drop DATABASE or TABLE in DROP clause. Instead found " + uppercaseTypeToDrop + ".";
    }
}