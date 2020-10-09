import Table from "./table";
import parseAndRun from "../parser/parseAndRun";
jest.mock("../parser/parseAndRun");



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