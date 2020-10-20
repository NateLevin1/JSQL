import parseIdentifier from "../parseIdentifier/parseIdentifier";

export default function parseMultiIdentifier(str: string) {
    // remove spaces
    const {identifier: beforeSpace, rest: afterSpace} = parseIdentifier(str); 

    const line = beforeSpace + afterSpace;

    if(line[0] === "(") {
        // go until ending parens, with new ident after every comma
        // parseIdentifier stops at commas but includes the comma at the beginning of `rest`
        let identifiers: string[] = [];
        let rest = line.slice(1); // remove starting paren
        while(parseIdentifier(rest).identifier !== "") {
            let newIdent = parseIdentifier(rest, {stopAtCommas: true});
            identifiers.push(newIdent.identifier);
            rest = newIdent.rest.startsWith(",") ? newIdent.rest.slice(1) : newIdent.rest;
            if(rest == "") {
                throw "Could not find end of parentheses.";
            }
        }
        // remove ending paren
        rest = rest.slice(1);

        return { identifiers: identifiers, rest: rest }
    } else {
        // go until space, already calculated in beforeSpace so just split it
        return { identifiers: beforeSpace.split(","), rest: afterSpace };
    }
}