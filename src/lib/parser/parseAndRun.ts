import runSelect from "../runner/select/runSelect";
import runCreate from "../runner/create/runCreate";
import parseStatement from "./parseStatement/parseStatement";
import "./registerClauses";
import runInsert from "../runner/insert/runInsert";

export default function parseAndRun(statement: string) {
    const clauses = parseStatement(statement);
    const statementType = clauses[0].keyword;

    switch(statementType) {
        case "SELECT":
            runSelect(clauses);
            break;
        case "CREATE":
            runCreate(clauses);
            break;
        case "INSERT":
            runInsert(clauses)
            break;
    }
}