import runTruncate from "./runTruncate";

test("runs clear if all is proper", ()=>{
    const db = {
        stores: {
            tbl: {
                clear: jest.fn()
            }
        }
    } as any;

    runTruncate([{keyword: "TRUNCATE", items:["TABLE", "tbl"]}], db);
    expect(db.stores.tbl.clear).toBeCalledTimes(1);
});

test("throws if table doesn't exist", ()=>{
    expect(()=>runTruncate([{keyword: "TRUNCATE", items:["TABLE", "tbl"]}], { stores: {} } as any)).toThrowError("Table tbl does not exist.");
});