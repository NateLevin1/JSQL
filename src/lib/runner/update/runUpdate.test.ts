import { Table } from "dexie";
import { IDatabase } from "../databases";
import where from "../where/where";
import runUpdate from "./runUpdate";
jest.mock("../where/where");

// @ts-ignore
where.mockImplementation(()=>({ modify: modifyFn }));

const modifyFn = jest.fn((callback: (row: object) => void) => {
    const row = { n: 2 };
    callback(row);
    return row; // returns the modified row
});

const tableValues = {
    toCollection: () => {
        return {
            modify: modifyFn
        }
    }
} as unknown as Table;

const database = {
    db: {},
    stores: {
        tbl: tableValues,
        tbl2: tableValues
    } as {[key:string]: Table},
    storesColumns: {
        tbl: "",
        tbl2: ""
    } as any
} as IDatabase;

test("works with no where clause, single table", ()=>{
    return runUpdate([{keyword: "UPDATE", items:[["tbl"]]}, {keyword: "SET", items:[[{left:"n", operator:"=", right:"1"}]]}], database).then((returned: any)=>{
        // since runUpdate returns what was returned by modifyFn we can use returned to make sure everything was changed correctly
        expect(returned).toStrictEqual([{
            n: 1
        }]);

        expect(modifyFn).toBeCalledTimes(1);
    });
});

test("works with no where clause, multiple tables", ()=>{
    return runUpdate([{keyword: "UPDATE", items:[["tbl", "tbl2"]]}, {keyword: "SET", items:[[{left:"n", operator:"=", right:"1"}]]}], database).then((returned: any)=>{
        // since runUpdate returns what was returned by modifyFn we can use returned to make sure everything was changed correctly
        let tblVal = { n: 1 };
        expect(returned).toStrictEqual([tblVal, tblVal]);

        expect(modifyFn).toBeCalledTimes(2);
    });
});

test("works with no where clause, * as table", ()=>{
    return runUpdate([{keyword: "UPDATE", items:[["*"]]}, {keyword: "SET", items:[[{left:"n", operator:"=", right:"1"}]]}], database).then((returned: any)=>{
        // since runUpdate returns what was returned by modifyFn we can use returned to make sure everything was changed correctly
        let tblVal = { n: 1 };
        expect(returned).toStrictEqual([tblVal, tblVal]);

        expect(modifyFn).toBeCalledTimes(2);
    });
});

test("works with where clause", ()=>{
    return runUpdate([{keyword: "UPDATE", items:[["tbl"]]}, {keyword: "SET", items:[[{left:"n", operator:"=", right:"1"}]]}, {keyword: "WHERE", items:["whereClause"]} ], database).then((returned: any)=>{
        // since runUpdate returns what was returned by modifyFn we can use returned to make sure everything was changed correctly
        expect(returned).toStrictEqual([{
            n: 1
        }]);
        expect(where).toBeCalledWith(tableValues, "whereClause");
        expect(modifyFn).toBeCalledTimes(1);
    });
});

test("works with column name in SET clause", ()=>{
    return runUpdate([{keyword: "UPDATE", items:[["tbl"]]}, {keyword: "SET", items:[[{left:"n", operator:"=", right:"n + 1"}]]}], database).then((returned: any)=>{
        // since runUpdate returns what was returned by modifyFn we can use returned to make sure everything was changed correctly
        expect(returned).toStrictEqual([{
            n: 3
        }]);

        expect(modifyFn).toBeCalledTimes(1);
    });
});

test("throws on non-equals in SET", ()=>{
    expect(()=>runUpdate([{keyword: "UPDATE", items:[["tbl"]]}, {keyword: "SET", items:[[{left:"n", operator:">", right:"1"}]]}], database)).toThrowError("Only the assignment operator ('=') can be used in a SET clause. Instead got >.");
});

test("throws on non-table", ()=>{
    expect(()=>runUpdate([{keyword: "UPDATE", items:[["non-existent"]]}, {keyword: "SET", items:[[{left:"n", operator:"=", right:"1"}]]}], database)).toThrowError("Table non-existent does not exist.");
});