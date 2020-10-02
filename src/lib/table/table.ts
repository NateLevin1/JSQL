import { TableStructure } from "./tableTypings";
export default class Table {
    private structure: TableStructure
    public name: string
    constructor(shouldParse: string) {
        this.name = "db";
        this.structure = {
            indexedColumns: ["firstName", "lastName", "email"],
            unIndexedColumns: [],
            rows: [["John", "Doe", "johndoe@example.com"], ["Jill", "Doe", "jilldoe@example.com"]]
        }
    }
    query(query: string) {
        // console.log(parseStatement(query));
    }
}