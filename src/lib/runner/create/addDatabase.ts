import databases, { IDatabase } from "../databases";
import Dexie from "dexie";

export default function addDatabase(name: string) {
    return new Promise((resolve, reject)=>{
        var db = databases[name]?.db;
        if (!(db instanceof Dexie)) {
            db = new Dexie(name);
            databases[name] = { stores: {}, storesColumns: {} } as IDatabase; // we add its properties later
            databases[name].db = db;
            // TODO: The below does nothing; We still get "Upgrade 'db' blocked by other connection holding version 2"
            // TODO: warning even though the behavior is correct
            db.on("versionchange", ()=>{
                db.close();
                return false;
            });
        }
        Dexie.exists(name).then((exists)=>{
            if(exists) {
                const databasesRef = databases[name];
                db.open()
                .then(()=>{
                    db.tables.forEach((table)=>{
                        databasesRef.storesColumns[table.name] = table.schema.indexes.map(obj=>obj.name);
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