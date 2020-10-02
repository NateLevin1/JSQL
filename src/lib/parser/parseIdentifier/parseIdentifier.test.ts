import parseIdentifier from "./parseIdentifier";

test("Parsing stops when string ends", ()=>{
    expect(parseIdentifier("identifier")).toStrictEqual({ identifier: "identifier", rest: ""});
});
test("Parsing stops at space", ()=>{
    expect(parseIdentifier("identifier 2")).toStrictEqual({ identifier: "identifier", rest: " 2"});
});
test("Parsing stops at closing parentheses", ()=>{
    expect(parseIdentifier("identifier) ")).toStrictEqual({ identifier: "identifier", rest: ") "});
});
test("Parsing removes spaces in beginning", ()=>{
    expect(parseIdentifier("  identifier 2")).toStrictEqual({ identifier: "identifier", rest: " 2"});
});
test("Parsing throws error if identifiers array does not contain identifier", ()=>{
    expect(()=>parseIdentifier("identifier", ["not-identifier"])).toThrow();
});