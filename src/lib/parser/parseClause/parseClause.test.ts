import { parseClause, clauses } from "./parseClause";
import { parseExpression } from "../parseExpression/parseExpression";
import parseIdentifier from "../parseIdentifier/parseIdentifier";
import parsePredicate from "../parsePredicate/parsePredicate";

jest.mock("../parseExpression/parseExpression");
jest.mock("../parseIdentifier/parseIdentifier");
jest.mock("../parsePredicate/parsePredicate");

test("Identifiers work properly", ()=>{
    clauses.clauses = {};
    clauses.register("SELECT", ["identifier"]);
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "SELECT", rest:" *"}).mockReturnValueOnce({identifier: "*", rest:""});
    expect(parseClause("SELECT *")).toStrictEqual({keyword: "SELECT", items:["*"], rest:""});
});

test("Identifiers work properly with register & parsed & requiredItems as wrong case", ()=>{
    clauses.clauses = {};
    clauses.register("select", ["IDENTIFIER"]);
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "select", rest:" *"}).mockReturnValueOnce({identifier: "*", rest:""});
    expect(parseClause("select *")).toStrictEqual({keyword: "SELECT", items:["*"], rest:""});
});

test("Predicates work properly", ()=>{
    clauses.clauses = {};
    clauses.register("WHERE", ["predicate"]);
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "WHERE", rest:" x = 1"});
    // @ts-ignore
    parsePredicate.mockReturnValueOnce({left: "x", operator: "=", right: "1", rest: ""});
    expect(parseClause("WHERE x = 1")).toStrictEqual({keyword: "WHERE", items:[{ left: "x", operator: "=", right: "1" }], rest:""});
});

test("Expressions work properly", ()=>{
    clauses.clauses = {};
    clauses.register("TEST", ["expression"]);
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "TEST", rest:" 1+1"});
    // @ts-ignore
    parseExpression.mockReturnValueOnce({expression:"1+1", rest:""});
    expect(parseClause("TEST 1+1")).toStrictEqual({keyword: "TEST", items:["1+1"], rest:""});
});

test("rests works properly", ()=>{
    clauses.clauses = {};
    clauses.register("TEST", ["rest"]);
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "TEST", rest:" some stuff here"});
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "some", rest:" stuff here"});
    expect(parseClause("TEST some stuff here")).toStrictEqual({keyword: "TEST", items:["some stuff here" ], rest:""});
});

test("Invalid keyword throws", ()=>{
    clauses.clauses = {};
    //* select is never registered
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "SELECT", rest:" *"});
    expect(()=>parseClause("SELECT *")).toThrow();
});

test("Forced after works if correct", ()=>{
    clauses.clauses = {};
    clauses.register("TEST", ["AFTER"]);
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "TEST", rest:" AFTER"});
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "AFTER", rest:""});
    expect(parseClause("TEST AFTER")).toStrictEqual({keyword: "TEST", items:["AFTER"], rest:""});
});

test("Forced after throws if incorrect", ()=>{
    clauses.clauses = {};
    clauses.register("TEST", ["AFTER"]);
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "TEST", rest:" NOTAFTER"});
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "NOTAFTER", rest:""});
    expect(()=>parseClause("TEST NOTAFTER")).toThrow();
});

test("Forced after \"or\" works if correct", ()=>{
    clauses.clauses = {};
    clauses.register("TEST", [["AFTER", "ALSO"]]);
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "TEST", rest:" ALSO"});
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "ALSO", rest:""});
    expect(parseClause("TEST ALSO")).toStrictEqual({keyword: "TEST", items:["ALSO"], rest:""});
});

test("Forced after \"or\" throws if incorrect", ()=>{
    clauses.clauses = {};
    clauses.register("TEST", [["AFTER", "ALSO"]]);
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "TEST", rest:" NOTAFTER"});
    // @ts-ignore
    parseIdentifier.mockReturnValueOnce({identifier: "NOTAFTER", rest:""});
    expect(()=>parseClause("TEST NOTAFTER")).toThrow();
});