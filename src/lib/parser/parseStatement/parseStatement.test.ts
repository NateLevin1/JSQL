import { clauses } from "../parseClause/parseClause";
import parseStatement from "./parseStatement";

clauses.register("SELECT", ["identifier"]);
clauses.register("FROM", ["identifier"]);

test("Parses correctly with a semicolon", ()=>{
    expect(parseStatement("SELECT * from db;")).toStrictEqual(
        [
            { keyword: "SELECT", items:[{ identifier: "*"  }] },
            { keyword: "FROM",   items:[{ identifier: "db" }] }
        ]
    );
});

test("Parses correctly without a semicolon", ()=>{
    expect(parseStatement("SELECT * from db")).toStrictEqual(
        [
            { keyword: "SELECT", items:[{ identifier: "*"  }] },
            { keyword: "FROM",   items:[{ identifier: "db" }] }
        ]
    );
});