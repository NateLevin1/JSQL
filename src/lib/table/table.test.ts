import Table from "./table";
import parseAndRun from "../parser/parseAndRun";
import stores from "../runner/stores";
import deleteTable from "../runner/drop/deleteTable";
jest.mock("../runner/stores");
jest.mock("../parser/parseAndRun");
jest.mock("../runner/drop/deleteTable");

stores.tbl = {
    count: jest.fn(()=>{
        return Promise.resolve(0);
    }),
    clear: jest.fn(()=>{
        return Promise.resolve();
    })
} as any;

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
        expect(parseAndRun).toBeCalledWith(createStatement);
        expect(val).toBe(tbl);
    });
});

test("query runs with proper statement", ()=>{
    // @ts-ignore
    parseAndRun.mockResolvedValueOnce(undefined); // this value doesn't matter, as long as its a promise
    let tbl = new Table(createStatement);
    tbl.query("query");
    expect(parseAndRun).toBeCalledWith("query");
});

test("throws on constructor non-create statement", ()=>{
    expect(()=>new Table("SELECT * from othertbl")).toThrow();
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
    expect(stores.tbl.clear).toBeCalledTimes(1);
});

test("drop calls deleteTable with correct arguments", ()=>{
    let tbl = new Table(createStatement);
    tbl.drop();
    expect(deleteTable).toBeCalledWith("tbl");
});