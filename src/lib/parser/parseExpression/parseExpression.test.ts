import { parseExpression, escapeCommas } from "./parseExpression";
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

test("expression is parsed properly without parentheses with rest", ()=>{
    expect(parseExpression(/*VALUES(*/"1+2, column2")).toStrictEqual({
        expression: "1+2",
        rest: " column2"
    });
});
test("expression is parsed properly without parentheses without rest", ()=>{
    expect(parseExpression(/*WHERE x = */"1+2")).toStrictEqual({
        expression: "1+2",
        rest: ""
    });
});
test("Error is thrown if no closing parentheses", ()=>{
    expect(()=>parseExpression("(1+2")).toThrow();
});

describe("escaping commas works", ()=>{
    test("does nothing with no commas", ()=>{
        expect(escapeCommas("1234")).toBe("1234");
    });
    test("escapes commas", ()=>{
        expect(escapeCommas("1,2,3,4")).toBe("1\\,2\\,3\\,4");
    });
});