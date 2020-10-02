import parseOperator from "./parseOperator";
import parseIdentifier from "../parseIdentifier/parseIdentifier";
jest.mock("../parseIdentifier/parseIdentifier");

test("Finds correct operator", ()=>{
    // @ts-ignore
    parseIdentifier.mockReturnValue({identifier: "=", rest:""});
    expect(parseOperator("=")).toStrictEqual({operator:"=", rest:""});
});

test("Gives proper rest param", ()=>{
    // @ts-ignore
    parseIdentifier.mockReturnValue({identifier: "=", rest:" identifier"});
    expect(parseOperator("= identifier")).toStrictEqual({operator:"=", rest:" identifier"});
});

test("Throws if not a valid operator", ()=>{
    // @ts-ignore
    parseIdentifier.mockReturnValue({identifier: "not-operator", rest:""});
    expect(()=>parseOperator("not-operator")).toThrow();
});

describe("All the operators work", ()=>{
    test("= works", ()=>{
        // @ts-ignore
        parseIdentifier.mockReturnValue({identifier: "=", rest:""});
        expect(parseOperator("=")).toStrictEqual({operator:"=", rest:""});
    });
    test("IGNORECASE= works", ()=>{
        // @ts-ignore
        parseIdentifier.mockReturnValue({identifier: "IGNORECASE=", rest:""});
        expect(parseOperator("IGNORECASE=")).toStrictEqual({operator:"IGNORECASE=", rest:""});
    });
    test("<> works", ()=>{
        // @ts-ignore
        parseIdentifier.mockReturnValue({identifier: "<>", rest:""});
        expect(parseOperator("<>")).toStrictEqual({operator:"<>", rest:""});
    });
    test("!= works", ()=>{
        // @ts-ignore
        parseIdentifier.mockReturnValue({identifier: "!=", rest:""});
        expect(parseOperator("!=")).toStrictEqual({operator:"!=", rest:""});
    });
    test("> works", ()=>{
        // @ts-ignore
        parseIdentifier.mockReturnValue({identifier: ">", rest:""});
        expect(parseOperator(">")).toStrictEqual({operator:">", rest:""});
    });
    test("< works", ()=>{
        // @ts-ignore
        parseIdentifier.mockReturnValue({identifier: "<", rest:""});
        expect(parseOperator("<")).toStrictEqual({operator:"<", rest:""});
    });
    test(">= works", ()=>{
        // @ts-ignore
        parseIdentifier.mockReturnValue({identifier: ">=", rest:""});
        expect(parseOperator(">=")).toStrictEqual({operator:">=", rest:""});
    });
    test("<= works", ()=>{
        // @ts-ignore
        parseIdentifier.mockReturnValue({identifier: "<=", rest:""});
        expect(parseOperator("<=")).toStrictEqual({operator:"<=", rest:""});
    });
});