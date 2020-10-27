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
test("skips if no parens", ()=>{
    expect(parseExpression("text")).toStrictEqual({
        expression: "",
        rest:"text"
    });
});