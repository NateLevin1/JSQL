import parseAndRun from "../parser/parseAndRun";
import parseIdentifier from "../parser/parseIdentifier/parseIdentifier";
/**
 * @example
 * let tbl = new Table("CREATE TABLE tbl (id AUTO_INCREMENT)");
 * tbl = await tbl.create();
 * console.log(await tbl.query(`SELECT * from ${tbl.name}`));
 */
export default class Table {
    createStatement: string
    name: string
    constructor(shouldParse: string) {
        if(parseIdentifier(shouldParse).identifier !== "CREATE") {
            throw new Error("Must CREATE a table in table constructor");
        }
        this.createStatement = shouldParse;

        // first ident is CREATE, second ident is TABLE, third ident is the name
        this.name = parseIdentifier(parseIdentifier(parseIdentifier(shouldParse).rest).rest).identifier;
    }
    create() {
        return new Promise((resolve, reject)=>{
            // this whole antipattern is just so that you can set your table var to this fn so we don't have an awkward await statement that is at the start of the line 
            parseAndRun(this.createStatement)
            .then(()=>{
                resolve(this);
            })
            .catch((rejection)=>{
                reject(rejection);
            })
        });
    }
    query(query: string) {
        return parseAndRun(query);
    }
}