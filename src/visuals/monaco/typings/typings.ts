export default `
/**
 * Helper class for creating databases. Note that unlike tables, this constructor is
 * required since there is no other way to query.
 * 
 * @example
 * \`\`\`js
 * let db = await new Database("CREATE DATABASE db").create();
 * db.query(\`SELECT * FROM xyz\`);
 * \`\`\`
 */
class Database {
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
     * Equivalent to running \`DROP TABLE tableName\` for each table's name in the database
     */
    clear() {
        // https://github.com/dfahlander/Dexie.js/issues/349#issuecomment-254756552
        return databases[this.name].db.delete().then(()=>databases[this.name].db.open());
    }
    /**
     * Deletes the table. Equivalent to running \`DROP DATABASE \${db.name}\`
     */
    drop() {
        return databases[this.name].db.delete();
    }
}
/**
 * Helper class for creating tables. Using this class is not required,
 * but it provides some helpful functions that can't be done by just querying the database.
 * 
 * @example
 * \`\`\`js
 * let tbl = await new Table("CREATE TABLE tbl (id AUTO_INCREMENT)").create();
 * tbl.query(\`SELECT * from \${tbl.name}\`);
 * \`\`\`
 */
class Table {
    /**
     * The string representation of the statement that creates the table.
     * Changing this is not recommended, instead just update the constructor.
     */
    createStatement: string
    /**
     * The name of the parent DB. By default this is \`"__JSQL_DEFAULT__"\` but
     * if a specific db is provided in the constructor then that is its name.
     */
    parentDbName: string
    /**
     * The name of the table. Determined in the constructor.
     */
    name: string
    /**
     * Table constructor. Note that in order to actually make the table you will need to call .create()
     * @param shouldParse - the CREATE statement for the table
     * @param parentDb - OPTIONAL The name of the db to contain the table. By default it is the JSQL default database.
     */
    constructor(shouldParse: string, parentDb: (string|Database) = "__JSQL_DEFAULT__") {
        if(parseIdentifier(shouldParse).identifier.toUpperCase() !== "CREATE" || parseIdentifier(parseIdentifier(shouldParse).rest).identifier.toUpperCase() !== "TABLE") {
            throw new Error("Must CREATE a TABLE in table constructor");
        }
        this.createStatement = shouldParse;

        // first ident is CREATE, second ident is TABLE, third ident is the name
        this.name = parseIdentifier(parseIdentifier(parseIdentifier(shouldParse).rest).rest).identifier;

        if(typeof parentDb === "string") {
            this.parentDbName = parentDb;
        } else {
            this.parentDbName = parentDb.name;
        }
    }
    /**
     * Create the table from the statement given in the constructor. Note that this will:
     * 1. Do **nothing** if the given table's schema matches the existing one's
     * 2. Create the table if it doesn't exist
     * 3. Update the schema of the table if it does exist and has a different schema
     */
    create(): Promise<Table> {
        return new Promise((resolve, reject)=>{
            // this whole antipattern is just so that you can set your table var to this fn so we don't have an awkward await statement that is at the start of the line 
            parseAndRun(this.createStatement, databases[this.parentDbName])
            .then(()=>{
                resolve(this);
            })
            .catch((rejection: unknown)=>{
                reject(rejection);
            })
        });
    }
    /**
     * Query the table with a SQL statement
     * @param query The query to be executed on the table in the form of a SQL statement.
     */
    query(query: string) {
        return parseAndRun(query, databases[this.parentDbName]);
    }
    /**
     * Asynchronously checks if the table is empty. This is useful for adding data only the first time a table is made
     */
    isEmpty(): Promise<boolean> {
        return new Promise(async (resolve)=>{
            resolve((await databases[this.parentDbName].stores[this.name].count()) === 0);
        });
    }
    /**
     * Clears all data on the table.
     */
    clear() {
        return databases[this.parentDbName].stores[this.name].clear();
    }
    /**
     * Delete the table. This is the same as running
     * \`\`\`js
     * tbl.query(\`DROP TABLE \${tbl.name}\`);
     * \`\`\`
     */
    drop() {
        return deleteTable(this.name, databases[this.parentDbName]);
    }
}`;