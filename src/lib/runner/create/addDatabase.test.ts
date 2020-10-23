import addDatabase from "./addDatabase"
import databases from "../databases";
import Dexie from "dexie";
jest.mock("dexie");
jest.mock("../databases");

test("works properly if doesn't exist", ()=>{
    Dexie.exists = jest.fn(()=>Promise.resolve(false));
    expect(addDatabase("name")).resolves.toBe(undefined);
    expect(databases.name.stores).toStrictEqual({});
    expect(databases.name.storesColumns).toStrictEqual({});
});
test("works properly if does exist", ()=>{
    Dexie.exists = jest.fn(()=>Promise.resolve(true));
    const tablesValue = {name: "tbl", schema: { indexes: [] }};
    Object.defineProperty(Dexie.prototype, "tables", {
        value: [tablesValue],
        configurable: true
    });

    return addDatabase("name").then(()=>{
        expect(databases.name.stores).toStrictEqual({
            tbl: tablesValue
        });
        expect(databases.name.storesColumns).toStrictEqual({
            tbl: []
        });
    });
});

test("rejects if db.open fails", ()=>{
    Dexie.exists = jest.fn(()=>Promise.resolve(true));

    Object.defineProperty(Dexie.prototype, "open", {
        value: ()=>Promise.reject("r"),
        configurable: true
    });
    expect(()=>addDatabase("name")).rejects.toBe("Opening database name failed. Reason: r");
});