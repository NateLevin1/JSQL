import { parseExpression } from "../parseExpression/parseExpression";
import parseIdentifier from "../parseIdentifier/parseIdentifier";
import parseMultiIdentifier from "../parseMultiIdentifier/parseMultiIdentifier";
import parseMultiPredicate from "../parseMultiPredicate/parseMultiPredicate";
import parsePredicate from "../parsePredicate/parsePredicate";

export const clauses = { 
    clauses: {} as { [key: string]: { requiredItems: (string|string[]|ItemWithOptions)[] }},
    /**
     * Register a clause so that it can be parsed.
     * @example
     * ```js
     * clauses.register("KEYWORD", ["REQUIRED", "identifier"]) // matches 'KEYWORD REQUIRED abc'
     * clauses.register("KEYWORD", [["a", "b"], "identifier"]) // matches 'KEYWORD a abc' and 'KEYWORD b abc'
     * clauses.register("KEYWORD", [{optional: true, word:"OPTIONAL"}, "identifier"]) // matches 'KEYWORD abc' and 'KEYWORD OPTIONAL abc'
     * ```
     */
    register: (keyword: (string|"KEYWORD"), requiredItems: (string|string[]|ItemWithOptions)[])=>{
        // clauses.register("SELECT", ["identifier"]);
        clauses.clauses[keyword.toUpperCase()] = {
            requiredItems: requiredItems.map((item)=>{
                if(item instanceof Array) {
                    return item.map(val=>val.toLocaleLowerCase());
                } else if(item instanceof Object) {
                    return {optional: item.optional, word: item.word}
                }
                return item.toLocaleLowerCase();
            })
        };
    }
}
interface ItemWithOptions {
    optional: boolean,
    word: string
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
            case "multi_predicate":
                const parsedMultiPredicate = parseMultiPredicate(restOfStr);
                clauseAST.items.push(parsedMultiPredicate.predicates);
                restOfStr = parsedMultiPredicate.rest;
                break;
            case "rest":
                const removedSpace = parseIdentifier(restOfStr);
                clauseAST.items.push(removedSpace.identifier+removedSpace.rest);
                restOfStr = "";
                break;
            default:
                const parsedKeyword = parseIdentifier(restOfStr);

                const valArr = val instanceof Array ? [...val] : [val];
                if((val as ItemWithOptions)?.optional) { // if it is optional we should not run the else if no matter what
                    if (parsedKeyword.identifier !== (val as ItemWithOptions)?.word) {
                        // if optional and next word is not optional word then act as if optional word was there
                        parsedKeyword.identifier = (val as ItemWithOptions)?.word;
                        parsedKeyword.rest = restOfStr; // keep the same as before since nothing changed
                    }
                } else if(!valArr.map((val: string)=>val.toLocaleLowerCase()).includes(parsedKeyword.identifier.toLocaleLowerCase())) {
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