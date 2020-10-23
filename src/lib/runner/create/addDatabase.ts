import databases, { IDatabase } from "../databases";
import Dexie from "dexie";

export default function addDatabase(name: string) {
    return new Promise((resolve, reject)=>{
        let db = new Dexie(name);
        databases[name] = { stores:{}, storesColumns:{} } as IDatabase; // we add its properties later
        databases[name].db = db;
        Dexie.exists(name).then((exists)=>{
            if(exists) {
                const databasesRef = databases[name];
                db.open()
                .then(()=>{
                    db.tables.forEach((table)=>{
                        databasesRef.stores[table.name] = table;
                        databasesRef.storesColumns[table.name] = databasesRef.stores[table.name].schema.indexes.map(obj=>obj.name);
                    });
                    resolve(); 
                })
                .catch((reason)=>{
                    reject("Opening database "+name+" failed. Reason: "+reason);
                });
            } else {
                resolve();
            }
        });
    });
}