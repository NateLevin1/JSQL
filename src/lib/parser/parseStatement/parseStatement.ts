import { parseClause } from "../parseClause/parseClause";

// a statement looks like "SELECT * from db;"
export default function parseStatement(statement: string) {
    // remove ending semicolon
    if(statement[statement.length - 1] == ";") {
        statement = statement.slice(0, statement.length-1);
    }

    // @ts-ignore
    const getKeywordAndItems = ({keyword, items})=>({keyword, items});

    let clauses = [];
    let rest = statement;
    while(rest !== "") {
        const parsedClause = parseClause(rest);
        rest = parsedClause.rest;
        clauses.push(
            getKeywordAndItems(parsedClause)
        );
    }
    return clauses;
}