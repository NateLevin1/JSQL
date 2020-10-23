import { IDatabase } from "../databases";

export default function deleteTable(tableName: string, database: IDatabase) {
    if(database.db.isOpen()) {
        database.db.close();
    }
    return new Promise((resolve, reject)=>{
        // TODO: Make this a function so the code can be shared across CREATE and this
        let hasReadied = false;
        database.db.on("ready", ()=>{
            if(!hasReadied) {
                hasReadied = true;
                // because upgrade doesn't run on first
                resolve();
            }
        });
        database.db.version(database.db.verno + 1).stores({
            [tableName]: null
        }).upgrade(()=>{
            // runs after the db has been made. normally you would
            // use this to change stuff in the db, but we don't need to here
            resolve();
        });
        setTimeout(()=>{
            reject("Opening the database took longer than expected.");
        }, 4000);
        database.db.open()
        .catch((reason)=>{
            reject("There was a problem opening the database. "+reason);
        });
    });
}