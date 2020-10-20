const parseIdentifier = (str: string, options: {stopAtCommas?: boolean} = {})=>{
    // stop at commas is default false
    options.stopAtCommas = options.stopAtCommas === undefined ? false : true;

    let sliceFrom = 0;
    while(str[sliceFrom] === " ")
        sliceFrom++;
    if(sliceFrom !== 0)
        str = str.slice(sliceFrom); // save on slicing over and over again, only do it once

    let found = "";
    for(var i = 0; i < str.length; i++) {
        const char = str[i];
        if(char === " "||char === ")"||(options.stopAtCommas === true && char === ",")) 
            break;
        found += char;
    }

    return {identifier: found, rest:str.slice(found.length)} as ParsedIdentifier;
}
interface ParsedIdentifier {
    identifier: string;
    rest: string;
}
export default parseIdentifier;