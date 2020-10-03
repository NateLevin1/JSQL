import parseIdentifier from "../parseIdentifier/parseIdentifier";
import parseOperator from "../parseOperator/parseOperator";
import { parseExpression } from "../parseExpression/parseExpression";

const parsePredicate = (str: string)=>{
    let {identifier: left, rest:identRest} = parseIdentifier(str);
    let {operator, rest:opRest} = parseOperator(identRest);
    let {expression: right, rest:exprRest} = parseExpression(opRest);
    return { left: left, operator: operator, right: right, rest: exprRest };
}
export default parsePredicate;