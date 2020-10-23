import Database from "./database";
import parseAndRun from "../parser/parseAndRun";
import databases from "../runner/databases";

jest.mock("../runner/databases");
jest.mock("../parser/parseAndRun");

databases.clearDB = {} as any;
databases.clearDB.db = {
    delete: jest.fn(()=>{
        return Promise.resolve();
    }),
    open: jest.fn(()=>{
        return Promise.resolve();
    })
} as any;


const createStatement = "CREATE database newDB (id AUTO_INCREMENT)";
test("create statement is correct", ()=>{
    let db = new Database(createStatement);
    expect(db.createStatement).toBe(createStatement);
});

test("name is correct", ()=>{
    let db = new Database(createStatement);
    expect(db.name).toBe("newDB");
});

test("create is run with proper statement", ()=>{
    // @ts-ignore
    parseAndRun.mockResolvedValueOnce(undefined); // this value doesn't matter, as long as its a promise
    let db = new Database(createStatement);
    return db.create().then((val)=>{
        expect(parseAndRun).toBeCalledWith(createStatement, {});
        expect(val).toBe(db);
    });
});

test("query runs with proper statement", ()=>{
    // @ts-ignore
    parseAndRun.mockResolvedValueOnce(undefined); // this value doesn't matter, as long as its a promise
    let db = new Database(createStatement);
    db.query("query");
    expect(parseAndRun).toBeCalledWith("query", undefined); // undefined because databases.newDB === undefined
});

test("throws on constructor non-create statement", ()=>{
    expect(()=>new Database("SELECT * from othertbl")).toThrow();
});

test("throws on constructor non-Database creation", ()=>{
    expect(()=>new Database(`CREATE TABLE db`)).toThrow();
});

test("rejects on parseAndRun rejection", ()=>{
    let db = new Database(createStatement);
    // @ts-ignore
    parseAndRun.mockRejectedValueOnce("r"); // this value doesn't matter, as long as its a promise
    expect(db.create()).rejects.toBe("r");
});

test("calls correct functions when clear()", ()=>{
    let db = new Database("CREATE database clearDB (id AUTO_INCREMENT)");
    return db.clear().then(()=>{
        expect(databases.clearDB.db.delete).toBeCalled();
        expect(databases.clearDB.db.open).toBeCalled();
    });
});

test("calls correct functions when drop()", ()=>{
    let db = new Database("CREATE database clearDB (id AUTO_INCREMENT)");
    return db.drop().then(()=>{
        expect(databases.clearDB.db.delete).toBeCalled();
        expect(databases.clearDB.db.open).not.toBeCalled();
    });
});