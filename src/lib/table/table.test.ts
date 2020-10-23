import Table from "./table";
import parseAndRun from "../parser/parseAndRun";
import deleteTable from "../runner/drop/deleteTable";
import databases, { IDatabase } from "../runner/databases";
jest.mock("../parser/parseAndRun");
jest.mock("../runner/drop/deleteTable");
jest.mock("../runner/databases");

databases["__JSQL_DEFAULT__"] = {
    db: {},
    stores: {},
    storesColumns: {}
} as IDatabase;

databases["__JSQL_DEFAULT__"].stores.tbl = {
    count: jest.fn(()=>{
        return Promise.resolve(0);
    }),
    clear: jest.fn(()=>{
        return Promise.resolve();
    })
} as any;

const defaultDB = databases["__JSQL_DEFAULT__"];

const createStatement = "CREATE TABLE tbl (id AUTO_INCREMENT)";
test("create statement is correct", ()=>{
    let tbl = new Table(createStatement);
    expect(tbl.createStatement).toBe(createStatement);
});

test("name is correct", ()=>{
    let tbl = new Table(createStatement);
    expect(tbl.name).toBe("tbl");
});

test("create is run with proper statement", ()=>{
    // @ts-ignore
    parseAndRun.mockResolvedValueOnce(undefined); // this value doesn't matter, as long as its a promise
    let tbl = new Table(createStatement);
    return tbl.create().then((val)=>{
        expect(parseAndRun).toBeCalledWith(createStatement, defaultDB);
        expect(val).toBe(tbl);
    });
});

test("query runs with proper statement", ()=>{
    // @ts-ignore
    parseAndRun.mockResolvedValueOnce(undefined); // this value doesn't matter, as long as its a promise
    let tbl = new Table(createStatement);
    tbl.query("query");
    expect(parseAndRun).toBeCalledWith("query", defaultDB);
});

test("throws on constructor non-create statement", ()=>{
    expect(()=>new Table("SELECT * from othertbl")).toThrow();
});

test("throws on constructor non-table creation", ()=>{
    expect(()=>new Table(`CREATE DATABASE db`)).toThrow();
});

test("rejects on parseAndRun rejection", ()=>{
    let tbl = new Table(createStatement);
    // @ts-ignore
    parseAndRun.mockRejectedValueOnce("r"); // this value doesn't matter, as long as its a promise
    expect(tbl.create()).rejects.toBe("r");
});

test("isEmpty returns proper value", ()=>{
    let tbl = new Table(createStatement);
    return tbl.isEmpty().then((resVal)=>{
        expect(resVal).toBe(true);
    });
});

test("clear calls correct function", ()=>{
    let tbl = new Table(createStatement);
    tbl.clear(); 
    expect(defaultDB.stores.tbl.clear).toBeCalledTimes(1);
});

test("drop calls deleteTable with correct arguments", ()=>{
    let tbl = new Table(createStatement);
    tbl.drop();
    expect(deleteTable).toBeCalledWith("tbl", defaultDB);
});

test("name is correct with string", ()=>{
    let tbl = new Table(createStatement, "dbName");
    expect(tbl.parentDbName).toBe("dbName");
});

test("name is correct with object", ()=>{
    let tbl = new Table(createStatement, { name: "dbName" } as any);
    expect(tbl.parentDbName).toBe("dbName");
});