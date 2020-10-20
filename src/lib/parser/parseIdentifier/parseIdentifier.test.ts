import parseIdentifier from "./parseIdentifier";

test("Parsing stops when string ends", ()=>{
    expect(parseIdentifier("identifier")).toStrictEqual({ identifier: "identifier", rest: ""});
});
test("Parsing stops at space", ()=>{
    expect(parseIdentifier("identifier 2")).toStrictEqual({ identifier: "identifier", rest: " 2"});
});
test("Parsing stops at comma if stopAtComma is true", ()=>{
    expect(parseIdentifier("identifier, ", {stopAtCommas: true})).toStrictEqual({ identifier: "identifier", rest: ", "});
});
test("Parsing does not stops at comma if stopAtCommas is undefined (not given)", ()=>{
    expect(parseIdentifier("identifier, ")).toStrictEqual({ identifier: "identifier,", rest: " "});
});
test("Parsing stops at closing parentheses", ()=>{
    expect(parseIdentifier("identifier) ")).toStrictEqual({ identifier: "identifier", rest: ") "});
});
test("Parsing removes spaces in beginning", ()=>{
    expect(parseIdentifier("  identifier 2")).toStrictEqual({ identifier: "identifier", rest: " 2"});
});