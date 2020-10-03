import parsePredicate from "./parsePredicate";
import parseIdentifier from "../parseIdentifier/parseIdentifier";
import parseOperator from "../parseOperator/parseOperator";
import { parseExpression } from "../parseExpression/parseExpression";

jest.mock("../parseIdentifier/parseIdentifier");
jest.mock("../parseOperator/parseOperator");
jest.mock("../parseExpression/parseExpression");

test("Parsing a predicate with number returns proper values", ()=>{
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "x", rest:" = 1"});
    // @ts-ignore
    parseOperator.mockReturnValueOnce({operator: "=", rest:" 1"});
    // @ts-ignore
    parseExpression.mockReturnValueOnce({expression: "1", rest:""});
    expect(parsePredicate("x = 1")).toStrictEqual({left:"x", operator:"=", right:"1", rest:""});
});
test("Parsing a predicate with math returns proper values", ()=>{
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "x", rest:" = 1 + 1"});
    // @ts-ignore
    parseOperator.mockReturnValueOnce({operator: "=", rest:" 1 + 1"});
    // @ts-ignore
    parseExpression.mockReturnValueOnce({expression: "1 + 1", rest:""});
    expect(parsePredicate("x = 1 + 1")).toStrictEqual({left:"x", operator:"=", right:"1 + 1", rest:""});
});
test("Parsing a predicate with string returns proper values", ()=>{
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "x", rest:" = 'Hello World'"});
    // @ts-ignore
    parseOperator.mockReturnValueOnce({operator: "=", rest:" 'Hello World'"});
    // @ts-ignore
    parseExpression.mockReturnValueOnce({expression: "'Hello World'", rest:""});
    expect(parsePredicate("x = 'Hello World'")).toStrictEqual({left:"x", operator:"=", right:"'Hello World'", rest:""});
});
test("Parsing a predicate with identifier returns proper values", ()=>{
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "x", rest:" = ident"});
    // @ts-ignore
    parseOperator.mockReturnValueOnce({operator: "=", rest:" ident"});
    // @ts-ignore
    parseExpression.mockReturnValueOnce({expression: "ident", rest:""});
    expect(parsePredicate("x = ident")).toStrictEqual({left:"x", operator:"=", right:"ident", rest:""});
});