import runSelect from "./runSelect";
import { Table } from "dexie";
import where from "../where/where";
jest.mock("../where/where");
// @ts-ignore
where.mockImplementation(()=>{return {toArray: ()=>Promise.resolve([])}});

const database = {
    db: {},
    stores: {} as {[key: string]: object},
    storesColumns: {}
}

const setStores = (name: string, toArrayValues?: any)=>{
    database.stores[name] = {
        toCollection: ()=>{
            return {
                toArray: () => {
                    return new Promise((resolve) => {
                        resolve(toArrayValues);
                    });
                }
            }
        }
    } as unknown as Table;
}

test("queries correct table", ()=>{
    let dbItems = [{ n: 1 }, { n: 2 }];
    setStores("db", dbItems);
    return runSelect([{keyword: "SELECT", items:[["*"]]}, {keyword: "FROM", items:[["db"]]}], database as any).then(result=>{
        expect(result).toStrictEqual(dbItems);
    });
});


test("works correctly with multiple columns", ()=>{
    let dbItems = [{ n: 1, id:1 }, { n: 2, id:2 }];
    setStores("db", dbItems);
    return runSelect([{keyword: "SELECT", items:[["n", "id"]]}, {keyword: "FROM", items:[["db"]]}], database as any).then(result=>{
        expect(result).toStrictEqual(dbItems.map(v=>{return {n: v.n, id: v.id}; }));
    });
});

test("only returns the data if select items is not *", ()=>{
    let dbItems = [{ n: 1 }, { n: 2 }];
    setStores("db", dbItems);
    return runSelect([{keyword: "SELECT", items:[["n"]]}, {keyword: "FROM", items:[["db"]]}], database as any).then(result=>{
        expect(result).toStrictEqual(dbItems.map(v=>v.n));
    });
});

test("queries all tables if no FROM clause", ()=>{
    let dbItems = [{ n: 1 }, { n: 2 }];
    setStores("db", dbItems);
    setStores("db2", dbItems);
    return runSelect([ {keyword: "SELECT", items:[["*"]]}], database as any).then(result=>{
        expect(result).toStrictEqual({ db: dbItems, db2:dbItems } );
    });
});

test("queries all tables if from clause is *", ()=>{
    let dbItems = [{ n: 1 }, { n: 2 }];
    setStores("db", dbItems);
    setStores("db2", dbItems);
    return runSelect([ {keyword: "SELECT", items:[["*"]]}, {keyword: "FROM", items:[["*"]]}], database as any).then(result=>{
        expect(result).toStrictEqual({ db: dbItems, db2:dbItems } );
    });
});

test("throws error if table doesn't exist", ()=>{
    expect(()=>runSelect([{keyword: "SELECT", items:[["*"]]}, {keyword: "FROM", items:[["non-existant"]]}], {stores:{}} as any)).rejects.toBe("Table non-existant does not exist.");
});

describe("WHERE clause", ()=>{
    test("calls where if whereclause is provided", () => {
        let dbItems = [{ n: 1 }, { n: 2 }];
        setStores("db", dbItems);
        return runSelect([{ keyword: "SELECT", items: [["*"]] }, { keyword: "FROM", items: [["db"]] }, { keyword: "WHERE", items:[{left: "id", operator:"=", right:"1"}]}], database as any).then(result => {
            expect(where).toBeCalled();
        });
    });
});