import parseIdentifier from "../parseIdentifier/parseIdentifier";
const parseOperator = (str: string)=>{
    const {identifier: maybeOp, rest: remainingStr} = parseIdentifier(str);
    switch(maybeOp) {
        case "=":
        case "IGNORECASE=":
        case "<>":
        case "!=":
        case ">":
        case "<":
        case ">=":
        case "<=":
            // at this point maybeOp must be an op
            return {operator: maybeOp, rest: remainingStr};
        default:
            throw new Error(maybeOp+" is not an operator.");
    }
}
export default parseOperator;