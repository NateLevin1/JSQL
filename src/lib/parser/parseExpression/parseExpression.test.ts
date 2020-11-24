import { parseExpression } from "./parseExpression";
test("expression is parsed properly with parentheses", ()=>{
    expect(parseExpression("(1+1) text")).toStrictEqual({
        expression: "(1+1)",
        rest: " text"
    });
});

test("expression is parsed properly with spaces at beginning", ()=>{
    expect(parseExpression("      (1+1) text")).toStrictEqual({
        expression: "(1+1)",
        rest: " text"
    });
});

test("Error is thrown if no closing parentheses", ()=>{
    expect(()=>parseExpression("(1+2")).toThrow();
});
test("skips if no parens by default", ()=>{
    expect(parseExpression("text")).toStrictEqual({
        expression: "",
        rest:"text"
    });
});
describe("finds correct item without parens if forceParentheses is false", () => {
    test("works with double quotes", () => {
        expect(parseExpression("\"content\" rest", { forceParentheses: false })).toStrictEqual({
            expression: "\"content\"",
            rest: " rest"
        });
    });
    test("works with regex literals", () => {
        expect(parseExpression("/regex/gimsuy rest", { forceParentheses: false })).toStrictEqual({
            expression: "/regex/gimsuy",
            rest: " rest"
        });
    });
    test("throws on unending array literal", () => {
        expect(()=>parseExpression("[invalid rest", { forceParentheses: false })).toThrowError("Something is wrong with your SQL syntax in the WHERE clause");
    });
    test("works with numbers", () => {
        expect(parseExpression("-1_234 rest", { forceParentheses: false })).toStrictEqual({ // note that the underscore in the number is allowed in es6
            expression: "-1_234",
            rest: " rest"
        });
    });
    test("works with null", () => {
        expect(parseExpression("null rest", { forceParentheses: false })).toStrictEqual({
            expression: "null",
            rest: " rest"
        });
    });
    test("works with undefined", () => {
        expect(parseExpression("undefined rest", { forceParentheses: false })).toStrictEqual({
            expression: "undefined",
            rest: " rest"
        });
    });
    test("works with false", () => {
        expect(parseExpression("false rest", { forceParentheses: false })).toStrictEqual({
            expression: "false",
            rest: " rest"
        });
    });
    test("works with true", () => {
        expect(parseExpression("true rest", { forceParentheses: false })).toStrictEqual({
            expression: "true",
            rest: " rest"
        });
    });
    test("works with keyword if comma", () => {
        expect(parseExpression("true, rest", { forceParentheses: false })).toStrictEqual({
            expression: "true",
            rest: ", rest"
        });
    });
    test("works with object literals", () => {
        expect(parseExpression("{content} rest", { forceParentheses: false })).toStrictEqual({
            expression: "{content}",
            rest: " rest"
        });
    });
    test("works with array literals", () => {
        expect(parseExpression("[content] rest", { forceParentheses: false })).toStrictEqual({
            expression: "[content]",
            rest: " rest"
        });
    });
    test("works with `", () => {
        expect(parseExpression("`content` rest", { forceParentheses: false })).toStrictEqual({
            expression: "`content`",
            rest: " rest"
        });
    });
    test("works with single quotes without rest", () => {
        expect(parseExpression("'content'", { forceParentheses: false })).toStrictEqual({
            expression: "'content'",
            rest: ""
        });
    });
    test("works with single quotes with rest", () => {
        expect(parseExpression("   'content' rest", { forceParentheses: false })).toStrictEqual({
            expression: "'content'",
            rest: " rest"
        });
    });
    test("finds everything if nothing", () => {
        expect(parseExpression("nothing rest", { forceParentheses: false })).toStrictEqual({
            expression: "nothing rest",
            rest: ""
        });
    });
});