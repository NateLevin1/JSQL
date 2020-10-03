import { parseExpression } from "../parseExpression/parseExpression";
import parseIdentifier from "../parseIdentifier/parseIdentifier";
import parsePredicate from "../parsePredicate/parsePredicate";

export const clauses: IClauses = { 
    clauses: {},
    register: (keyword: string, requiredItems: string[])=>{
        // clauses.register("SELECT", ["identifier"]);
        clauses.clauses[keyword.toUpperCase()] = { requiredItems:requiredItems.map((str)=>str.toLocaleLowerCase()) };
    }
}
interface IClauses {
    clauses: { [key: string]: { requiredItems: string[] }};
    register: (keyword: string, requiredItems: string[])=>void;
}

export function parseClause(str: string) {
    let { identifier: keyword, rest: newStr } = parseIdentifier(str);
    str = newStr;
    keyword = keyword.toLocaleUpperCase();
    const next = clauses.clauses[keyword];
    let clauseAST: IClauseAST = {keyword:keyword, items:[], rest:"" };
    if(!next) {
        throw keyword+" is not a valid keyword.";
    }

    const nextItems = next.requiredItems;
    let restOfStr = str;
    for(const val of nextItems) {
        switch(val) {
            case "identifier":
                const parsedIdentifier = parseIdentifier(restOfStr);
                clauseAST.items.push({identifier: parsedIdentifier.identifier});
                restOfStr = parsedIdentifier.rest;
                break;
            case "predicate":
                const parsedPredicate = parsePredicate(restOfStr);
                clauseAST.items.push({left: parsedPredicate.left, right: parsedPredicate.right, operator: parsedPredicate.operator });
                restOfStr = parsedPredicate.rest;
                break;
            case "expression":
                const parsedExpression = parseExpression(restOfStr);
                clauseAST.items.push({expression: parsedExpression.expression});
                restOfStr = parsedExpression.rest;
                break;
            default:
                throw "Unknown value type "+val;
        }
    }
    clauseAST.rest = restOfStr;
    return clauseAST;
}

interface IClauseAST {
    keyword: string;
    items: {[key: string]: any}[];
    rest: string;
}