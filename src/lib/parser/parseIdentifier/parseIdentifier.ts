const parseIdentifier = (str: string, identifiers:(string[]|undefined) = undefined)=>{
    let sliceFrom = 0;
    while(str[sliceFrom] === " ")
        sliceFrom++;
    if(sliceFrom !== 0)
        str = str.slice(sliceFrom); // save on slicing over and over again, only do it once

    let found = "";
    for(var i = 0; i < str.length; i++) {
        const char = str[i];
        if(char === " "||char === ")") 
            break;
        found += char;
    }
    if(identifiers !== undefined && !identifiers.includes(found))
        throw new Error("Could not find identifier: "+found);

    return {identifier: found, rest:str.slice(found.length)} as ParsedIdentifier;
}
interface ParsedIdentifier {
    identifier: string;
    rest: string;
}
export default parseIdentifier;