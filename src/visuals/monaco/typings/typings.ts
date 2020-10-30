export default `
/**
 * @example
 * \`\`\`js
 * let tbl = new Table("CREATE TABLE tbl (id AUTO_INCREMENT)");
 * tbl = await tbl.create();
 * console.log(await tbl.query(\`SELECT * from \${tbl.name}\`));
 * \`\`\`
 */
class Table {
    createStatement: string
    parentDbName: string
    name: string
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
    create() {
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
    query(query: string) {
        return parseAndRun(query, databases[this.parentDbName]);
    }
    isEmpty(): Promise<boolean> {
        return new Promise(async (resolve)=>{
            resolve((await databases[this.parentDbName].stores[this.name].count()) === 0);
        });
    }
    clear() {
        return databases[this.parentDbName].stores[this.name].clear();
    }
    drop() {
        return deleteTable(this.name, databases[this.parentDbName]);
    }
}
`
