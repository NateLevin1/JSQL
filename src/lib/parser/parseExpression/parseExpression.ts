import parseIdentifier from "../parseIdentifier/parseIdentifier";

export const parseExpression = (str: string, options: {forceParentheses: boolean} = {forceParentheses: true})=>{
    // str looks like (1 + 1) 
    // this function does not run the expression - that is done 
    // at run time. This simply gets everything inside the expression
    // so that it can be executed later

    // remove starting whitespace
    let sliceFrom = 0;
    while(str[sliceFrom] === " ")
        sliceFrom++;
    if(sliceFrom !== 0)
        str = str.slice(sliceFrom);

    // if it starts with a parentheses, go until we see a closing one
    let expression = "";
    let rest = "";
    if(str[0] == "(") {
        for(var i = 0; i < str.length; i++) {
            if(str[i] == ")") {
                expression = str.slice(0, i+1); // +1 to include the closing parens
                rest = str.slice(i+1);
                break;
            } else if(i == str.length - 1) {
                throw new Error("Unclosed Parentheses");
            }
        }
    } else {
        if (options.forceParentheses) { // default
            // just skip
            rest = str;
        } else {
            // much more expensive, only used in the parsing of predicates

            let firstChar = parseIdentifier(str).identifier[0];
            let matched = {expression, rest:str};
            if(firstChar === "'" || firstChar === "`" || firstChar === "\"") {
                // strings
                matched = getFromMatch(str.match(/(('|"|`)[\s\S]*\2)([\s\S]*)/), str);
            } else if(firstChar === "[") {
                // arrays
                matched = getFromMatch(str.match(/(\[[\s\S]*\])([\s\S]*)/), str);
            } else if(firstChar === "{") {
                // objects
                matched = getFromMatch(str.match(/({[\s\S]*})([\s\S]*)/), str);
            } else if(firstChar === "/") {
                // regex
                matched = getFromMatch(str.match(/(\/[\s\S]*\/[gimsuy]*)([\s\S]*)/), str); // gimsuy is all the regex flags
            } else if(!isNaN(Number(firstChar)) || ( firstChar === "-" && !isNaN(Number( parseIdentifier(str).identifier[1] )) )) {
                // numbers
                matched = getFromMatch(str.match(/ *(-?[\d_]+)([\s\S]*)/), str);
            } else {
                let firstIdent = parseIdentifier(str);
                let word = firstIdent.identifier;
                // specific use cases where we already know what we should do
                if(word === "true" || word === "false" || word === "undefined" || word === "null") {
                    matched = { expression: word, rest: firstIdent.rest };
                } else {
                    // just use rest
                    matched = { expression: str, rest: "" };
                }
            }
            expression = matched.expression;
            rest = matched.rest;
        }
    }
    return { expression: expression, rest: rest }
}

export function getFromMatch(match: RegExpMatchArray, str: string) {
    let rest = str;
    let expression = "";
    if(match !== null) {
        expression = match[1];
        rest = match[3] ?? match[2];
    } else {
        throw "Something is wrong with your SQL syntax in the WHERE clause";
    }
    return { rest, expression };
}