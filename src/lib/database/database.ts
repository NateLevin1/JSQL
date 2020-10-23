import parseAndRun from "../parser/parseAndRun";
import parseIdentifier from "../parser/parseIdentifier/parseIdentifier";
import databases from "../runner/databases";

export default class Database {
    createStatement: string
    name: string
    constructor(shouldParse: string) {
        if(parseIdentifier(shouldParse).identifier.toUpperCase() !== "CREATE" || parseIdentifier(parseIdentifier(shouldParse).rest).identifier.toUpperCase() !== "DATABASE") {
            throw new Error("Must CREATE a DATABASE in database constructor");
        }
        this.createStatement = shouldParse;

        // first ident is CREATE, second ident is DATABASE, third ident is the name
        this.name = parseIdentifier(parseIdentifier(parseIdentifier(shouldParse).rest).rest).identifier;
    }
    create() {
        return new Promise((resolve, reject)=>{
            // we can't just use databases[this.name] here because it doesn't exist yet. Since CREATE DATABASE doesn't require a database reference, we can just pass in an empty object to get around this
            parseAndRun(this.createStatement, {} as any)
            .then(()=>{
                resolve(this);
            })
            .catch((rejection: unknown)=>{
                reject(rejection);
            })
        });
    }
    query(query: string) {
        return parseAndRun(query, databases[this.name]);
    }
    clear() {
        // https://github.com/dfahlander/Dexie.js/issues/349#issuecomment-254756552
        return databases[this.name].db.delete().then(()=>databases[this.name].db.open());
    }
    drop() {
        return databases[this.name].db.delete();
    }
}