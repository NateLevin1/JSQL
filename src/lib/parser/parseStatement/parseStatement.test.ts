import { clauses } from "../parseClause/parseClause";
import parseStatement from "./parseStatement";
import removeNoise from "../removeNoise/removeNoise";

jest.mock("../removeNoise/removeNoise");

clauses.register("SELECT", ["identifier"]);
clauses.register("FROM", ["identifier"]);

test("Parses SELECT correctly", ()=>{
    let statement = "SELECT * from db";
    // @ts-ignore
    removeNoise.mockReturnValue(statement);

    expect(parseStatement(statement)).toStrictEqual(
        [
            { keyword: "SELECT", items:["*"] },
            { keyword: "FROM",   items:["db"] }
        ]
    );
});