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
            return runSelect(clauses);
        case "CREATE":
            return runCreate(clauses);
        case "INSERT":
            return runInsert(clauses)
    }
}