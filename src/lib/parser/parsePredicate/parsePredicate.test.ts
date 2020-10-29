import parsePredicate from "./parsePredicate";

test("Parsing a predicate with number returns proper values", ()=>{
    expect(parsePredicate("x = 1")).toStrictEqual({left:"x", operator:"=", right:"1", rest:""});
});
test("Parsing a predicate with math returns proper values", ()=>{
    expect(parsePredicate("x = (1 + 1)")).toStrictEqual({left:"x", operator:"=", right:"(1 + 1)", rest:""});
});
test("Parsing a predicate with string returns proper values", ()=>{
    expect(parsePredicate("x = 'Hello World'")).toStrictEqual({left:"x", operator:"=", right:"'Hello World'", rest:""});
});
test("Parsing a predicate with identifier returns proper values", ()=>{
    expect(parsePredicate("x = ident")).toStrictEqual({left:"x", operator:"=", right:"ident", rest:""});
});