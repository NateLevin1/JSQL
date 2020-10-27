export const parseExpression = (str: string)=>{
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
        // just skip
        expression = "";
        rest = str;
    }
    return {expression: expression, rest:rest }
}