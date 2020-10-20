import parseMultiIdentifier from "./parseMultiIdentifier";
test("Works properly with no parentheses", ()=>{
    expect(parseMultiIdentifier("one,two,three more_content")).toStrictEqual({
        identifiers: ["one", "two", "three"],
        rest: " more_content"
    });
});
test("Works properly with parentheses", ()=>{
    expect(parseMultiIdentifier("(one, two, three) more_content")).toStrictEqual({
        identifiers: ["one", "two", "three"],
        rest: " more_content"
    });
});
test("Throws if no ending parentheses", ()=>{
    expect((()=>parseMultiIdentifier("(one,two"))).toThrowError("Could not find end of parentheses.");
});