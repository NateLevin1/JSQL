import { parseExpression } from "../parseExpression/parseExpression";
import parseIdentifier from "../parseIdentifier/parseIdentifier";
import parseMultiIdentifier from "../parseMultiIdentifier/parseMultiIdentifier";
import parsePredicate from "../parsePredicate/parsePredicate";

export const clauses: IClauses = { 
    clauses: {},
    register: (keyword: (string|"KEYWORD"), requiredItems: (string|string[])[])=>{
        // clauses.register("SELECT", ["identifier"]);
        clauses.clauses[keyword.toUpperCase()] = {
            requiredItems: requiredItems.map((str)=>{
                if(str instanceof Array) {
                    return str.map(val=>val.toLocaleLowerCase());
                }
                return str.toLocaleLowerCase();
            })
        };
    }
}
interface IClauses {
    clauses: { [key: string]: { requiredItems: (string|string[])[] }};
    register: (keyword: string, requiredItems: (string|string[])[])=>void;
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
                clauseAST.items.push(parsedIdentifier.identifier);
                restOfStr = parsedIdentifier.rest;
                break;
            case "multi_identifier":
                const parsedMultiIdentifier = parseMultiIdentifier(restOfStr);
                clauseAST.items.push(parsedMultiIdentifier.identifiers);
                restOfStr = parsedMultiIdentifier.rest;
                break;
            case "predicate":
                const parsedPredicate = parsePredicate(restOfStr);
                clauseAST.items.push({left: parsedPredicate.left, right: parsedPredicate.right, operator: parsedPredicate.operator });
                restOfStr = parsedPredicate.rest;
                break;
            case "expression":
                const parsedExpression = parseExpression(restOfStr);
                clauseAST.items.push(parsedExpression.expression);
                restOfStr = parsedExpression.rest;
                break;
            case "rest":
                const removedSpace = parseIdentifier(restOfStr);
                clauseAST.items.push(removedSpace.identifier+removedSpace.rest);
                restOfStr = "";
                break;
            default:
                const parsedKeyword = parseIdentifier(restOfStr);
                const valArr = val instanceof Array ? [...val] : [val];
                if(!valArr.map(val=>val.toLocaleLowerCase()).includes(parsedKeyword.identifier.toLocaleLowerCase())) {
                    throw "Expected keyword(s) "+valArr.join(" or ")+" but got "+parsedKeyword.identifier+" in "+keyword+" clause.";
                }
                clauseAST.items.push(parsedKeyword.identifier);
                restOfStr = parsedKeyword.rest;
                break;
        }
    }
    clauseAST.rest = restOfStr;
    return clauseAST;
}

interface IClauseAST {
    keyword: string;
    items: ({[key: string]: any}|string|string[])[];
    rest: string;
}