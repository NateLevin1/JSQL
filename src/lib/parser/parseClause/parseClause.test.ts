import { parseClause, clauses } from "./parseClause";
import { parseExpression } from "../parseExpression/parseExpression";
import parsePredicate from "../parsePredicate/parsePredicate";
import parseMultiIdentifier from "../parseMultiIdentifier/parseMultiIdentifier";

jest.mock("../parseExpression/parseExpression");
jest.mock("../parsePredicate/parsePredicate");
jest.mock("../parseMultiIdentifier/parseMultiIdentifier");

test("Identifiers work properly", ()=>{
    clauses.clauses = {};
    clauses.register("SELECT", ["identifier"]);
    expect(parseClause("SELECT *")).toStrictEqual({keyword: "SELECT", items:["*"], rest:""});
});

test("Identifiers work properly with register & parsed & requiredItems as wrong case", ()=>{
    clauses.clauses = {};
    clauses.register("select", ["IDENTIFIER"]);
    expect(parseClause("select *")).toStrictEqual({keyword: "SELECT", items:["*"], rest:""});
});

test("MultiIdentifiers work properly", ()=>{
    clauses.clauses = {};
    clauses.register("SELECT", ["multi_identifier"]);
    // @ts-ignore
    parseMultiIdentifier.mockReturnValueOnce({identifiers:["one", "two"], rest:""})
    expect(parseClause("SELECT one,two")).toStrictEqual({keyword:"SELECT", items:[["one", "two"]], rest:""});
});

test("Predicates work properly", ()=>{
    clauses.clauses = {};
    clauses.register("WHERE", ["predicate"]);
    // @ts-ignore
    parsePredicate.mockReturnValueOnce({left: "x", operator: "=", right: "1", rest: ""});
    expect(parseClause("WHERE x = 1")).toStrictEqual({keyword: "WHERE", items:[{ left: "x", operator: "=", right: "1" }], rest:""});
});

test("Expressions work properly", ()=>{
    clauses.clauses = {};
    clauses.register("TEST", ["expression"]);
    // @ts-ignore
    parseExpression.mockReturnValueOnce({expression:"1+1", rest:""});
    expect(parseClause("TEST 1+1")).toStrictEqual({keyword: "TEST", items:["1+1"], rest:""});
});

test("rest works properly", ()=>{
    clauses.clauses = {};
    clauses.register("TEST", ["rest"]);
    expect(parseClause("TEST some stuff here")).toStrictEqual({keyword: "TEST", items:["some stuff here" ], rest:""});
});

test("Invalid keyword throws", ()=>{
    clauses.clauses = {};
    //* select is never registered
    expect(()=>parseClause("SELECT *")).toThrow();
});

test("Forced after works if correct", ()=>{
    clauses.clauses = {};
    clauses.register("TEST", ["AFTER"]);
    expect(parseClause("TEST AFTER")).toStrictEqual({keyword: "TEST", items:["AFTER"], rest:""});
});

test("Forced after throws if incorrect", ()=>{
    clauses.clauses = {};
    clauses.register("TEST", ["AFTER"]);
    expect(()=>parseClause("TEST NOTAFTER")).toThrow();
});

test("Forced after \"or\" works if correct", ()=>{
    clauses.clauses = {};
    clauses.register("TEST", [["AFTER", "ALSO"]]);
    expect(parseClause("TEST ALSO")).toStrictEqual({keyword: "TEST", items:["ALSO"], rest:""});
});

test("Forced after \"or\" throws if incorrect", ()=>{
    clauses.clauses = {};
    clauses.register("TEST", [["AFTER", "ALSO"]]);
    expect(()=>parseClause("TEST NOTAFTER")).toThrow();
});

test("Optional after works is there", ()=>{
    clauses.clauses = {};
    clauses.register("TRUNCATE", [{optional: true, word: "TABLE"}]);
    expect(parseClause("TRUNCATE TABLE")).toStrictEqual({keyword: "TRUNCATE", items:["TABLE"], rest:""});
});

test("Optional after works isn't there", ()=>{
    clauses.clauses = {};
    clauses.register("TRUNCATE", [{optional: true, word: "TABLE"}]);
    expect(parseClause("TRUNCATE")).toStrictEqual({keyword: "TRUNCATE", items:["TABLE"], rest:""});
});