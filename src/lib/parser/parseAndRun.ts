import runSelect from "../runner/select/runSelect";
import runCreate from "../runner/create/runCreate";
import parseStatement from "./parseStatement/parseStatement";
import "./registerClauses";
import runInsert from "../runner/insert/runInsert";
import runDrop from "../runner/drop/runDrop";
import { IDatabase } from "../runner/databases";
import runTruncate from "../runner/truncate/runTruncate";
import runDelete from "../runner/delete/runDelete";

export default async function parseAndRun(statements: string, database: IDatabase) {
    let results = await Promise.all(statements.split(";").map((statement) => {
        const clauses = parseStatement(statement);
        const statementType = clauses[0].keyword;

        switch (statementType) {
            case "SELECT":
                return runSelect(clauses, database);
            case "CREATE":
                return runCreate(clauses, database);
            case "INSERT":
                return runInsert(clauses, database);
            case "DROP":
                return runDrop(clauses, database);
            case "ALTER":
                return Promise.reject("JSQL doesn't support ALTERing tables. Instead, change the schema in the Table constructor.");
            case "TRUNCATE":
                return runTruncate(clauses, database);
            case "DELETE":
                return runDelete(clauses, database);
        }
    }));
    if(results.length === 1) {
        return results[0];
    }
    return results;
}