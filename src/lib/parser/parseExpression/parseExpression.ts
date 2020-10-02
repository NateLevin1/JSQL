export const parseExpression = (str: string)=>{
    // str looks like (1 + 1) or 1 + 1 or 1+1 or "Hello World"
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
    let expression;
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
        // otherwise we have to make much more expensive guesses
        str = str.replace(/(["'`]).+\1/g, escapeCommas);
        str = str.replace(/\[.+\]/g, escapeCommas);
        str = str.replace(/{.+}/g, escapeCommas);

        expression = str;

        // now we go through the string, trying to find an unescaped comma.
        // if none is found, it will just go to the end of the string. 
        // This works fine for now, but may have to be refactored in the future.
        for(var i = 0; i < str.length; i++) {
            const val = str[i];
            if(val === "," && str[i-1] !== "\\") {
                expression = str.slice(0, i);
                rest = str.slice(i+1);
                break;
            }
        }
    }
    return {expression: expression, rest:rest }
}
export const escapeCommas = (match: string)=>{
    return match.replace(/,/g, "\\,");;
}