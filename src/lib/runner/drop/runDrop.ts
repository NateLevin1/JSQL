import deleteTable from "./deleteTable";

export default function runDrop(clauses: {keyword: string, items:any[]}[]) {
    return deleteTable(clauses[0].items[1]);
}