import deleteTable from "./deleteTable";
import runDrop from "./runDrop";
import databases from "../../runner/databases";

jest.mock("./deleteTable");
jest.mock("../../runner/databases");

test("calls deleteTable properly if items[0] is TABLE", ()=>{
    runDrop([{keyword: "DROP", items:["TABLE", "tbl"]}], {} as any);
    expect(deleteTable).toBeCalledWith("tbl", {});
});

test("calls delete on db if items[0] is DATABASE", ()=>{
    databases.dbName = {
        db: {
            delete: jest.fn(()=>Promise.resolve())
        }
    } as any;

    return runDrop([{keyword: "DROP", items:["DATABASE", "dbName"]}], {} as any).then(()=>{
        expect(databases.dbName.db.delete).toBeCalled();
    });
});

test("throws if items[0] is not TABLE or DATABASE", ()=>{
    expect(()=>runDrop([{keyword: "DROP", items:["UNKNOWN", "unknown"] }], {} as any)).toThrowError("Must drop DATABASE or TABLE in DROP clause. Instead found UNKNOWN.");
});