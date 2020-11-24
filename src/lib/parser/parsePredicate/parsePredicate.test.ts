import parsePredicate from "./parsePredicate";

test("Parsing a predicate with number returns proper values", ()=>{
    expect(parsePredicate("x = 1 rest")).toStrictEqual({left:"x", operator:"=", right:"1", rest:" rest"});
});
test("Parsing a predicate with math returns proper values", ()=>{
    expect(parsePredicate("x = (1 + 1) rest")).toStrictEqual({left:"x", operator:"=", right:"(1 + 1)", rest:" rest"});
});
test("Parsing a predicate with string returns proper values", ()=>{
    expect(parsePredicate("x = 'Hello World' rest")).toStrictEqual({left:"x", operator:"=", right:"'Hello World'", rest:" rest"});
});
test("Parsing a predicate with identifier returns proper values", ()=>{
    expect(parsePredicate("x = true rest")).toStrictEqual({left:"x", operator:"=", right:"true", rest:" rest"});
});