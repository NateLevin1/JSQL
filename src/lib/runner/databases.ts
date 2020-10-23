// IMPORTS
import Dexie, { Table } from "dexie";
import addDatabase from "./create/addDatabase";

// EXPORTS
export interface IDatabase {
    db: Dexie,
    stores: {[key: string]: Table},
    storesColumns: {[key: string]:string[]}
}
const databases: {[key:string]:IDatabase} = {};
export default databases;

// CODE
Dexie.getDatabaseNames().then((names)=>{
    if(names.length === 0) {
        // there are no databases, use default
        names = ["__JSQL_DEFAULT__"];
    }
    for(const name of names) {
        addDatabase(name);
    }
});