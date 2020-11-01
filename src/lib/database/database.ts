import parseAndRun from "../parser/parseAndRun";
import parseIdentifier from "../parser/parseIdentifier/parseIdentifier";
import databases from "../runner/databases";

/**
 * Helper class for creating databases. Note that unlike tables, this constructor is
 * required since there is no other way to query.
 * 
 * @example
 * ```js
 * let db = await new Database("CREATE DATABASE db").create();
 * db.query(`SELECT * FROM xyz`);
 * ```
 */
export default class Database {
    /**
     * The string representation of the statement that creates the database.
     * Changing this is not recommended, instead just update the constructor.
     */
    createStatement: string
    /**
     * The name of the database. Determined in the constructor.
     */
    name: string
    /**
     * Database constructor. Note that in order to actually make the table you will need to call .create()
     * @param shouldParse The CREATE statement for the database
     */
    constructor(shouldParse: string) {
        if(parseIdentifier(shouldParse).identifier.toUpperCase() !== "CREATE" || parseIdentifier(parseIdentifier(shouldParse).rest).identifier.toUpperCase() !== "DATABASE") {
            throw new Error("Must CREATE a DATABASE in database constructor");
        }
        this.createStatement = shouldParse;

        // first ident is CREATE, second ident is DATABASE, third ident is the name
        this.name = parseIdentifier(parseIdentifier(parseIdentifier(shouldParse).rest).rest).identifier;
    }
    /**
     * Create the database from the statement given in the constructor. Note that this will:
     * 1. Do **nothing** if the database already exists
     * 2. Create the database if it does not exist
     */
    create(): Promise<Database> {
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
    /**
     * Execute a SQL query on the database
     * @param query The query to be ran
     */
    query(query: string) {
        return parseAndRun(query, databases[this.name]);
    }
    /**
     * Removes all tables in the database.
     * Equivalent to running `DROP TABLE tableName` for each table's name in the database
     */
    clear() {
        // https://github.com/dfahlander/Dexie.js/issues/349#issuecomment-254756552
        return databases[this.name].db.delete().then(()=>databases[this.name].db.open());
    }
    /**
     * Deletes the table. Equivalent to running `DROP DATABASE ${db.name}`
     */
    drop() {
        return databases[this.name].db.delete();
    }
}