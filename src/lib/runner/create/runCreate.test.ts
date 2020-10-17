import runCreate from "./runCreate";
import stores, { db, storesColumns } from "../stores";

jest.mock("../stores");

var runReady: Function;
// @ts-ignore
db.on.mockImplementation((event: string, callback: Function)=>{
    if(event === "ready") {
        runReady = callback;
    }
});

let expectFn = (newStores)=>{};
const setTableUndefined = ()=>{
    Object.defineProperty(stores, "table", {
        get: ()=>{ return undefined },
        configurable: true
    });
}
// @ts-ignore
db.version.mockImplementation(()=>{
    return {
        stores: (newStores)=>{
            expectFn(newStores);
            return {
                upgrade:()=>{}
            }
        }
    }
});

// @ts-ignore
db.open = jest.fn(()=>Promise.resolve());

test("Works correctly with one", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":"one"
        });
    }
    runCreate([{keyword: "CREATE", items:["TABLE", "table", "(one)"]}]);

    expect(db.version).toBeCalled();
});
test("Works correctly with multiple", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":"one,two,three"
        });
    }
    setTableUndefined();
    runCreate([{keyword: "CREATE", items:["TABLE", "table", "(one,two,three)"]}]);
    expect(db.version).toBeCalled();
});
test("AUTO_INCREMENT works", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":"++id"
        });
    }
    setTableUndefined();
    runCreate([{keyword: "CREATE", items:["TABLE", "table", "(id AUTO_INCREMENT)"]}]);

    expect(db.version).toBeCalled();
});
test("UNIQUE works", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":"&id"
        });
    }
    setTableUndefined();
    runCreate([{keyword: "CREATE", items:["TABLE", "table", "(id UNIQUE)"]}]);

    expect(db.version).toBeCalled();
});
test("NO_INDEX works", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":"++id"
        });
    }
    setTableUndefined();
    runCreate([{keyword: "CREATE", items:["TABLE", "table", "(id AUTO_INCREMENT, name NO_INDEX)"]}]);

    expect(db.version).toBeCalled();
});
test("items[0] must be table", ()=>{
    expect(()=>runCreate([{keyword: "CREATE", items:["NOTTABLE", "table", "(id AUTO_INCREMENT, name NO_INDEX)"]}])).toThrow();
});

test("Works correctly with spaces", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":"one,two"
        });
    }
    setTableUndefined();
    runCreate([{keyword: "CREATE", items:["TABLE", "table", "( one, two )"]}]);

    expect(db.version).toBeCalled();
});

test("Works correctly with lowercase TABLE", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":"one"
        });
    }
    setTableUndefined();
    runCreate([{keyword: "CREATE", items:["table", "table", "(one)"]}]);

    expect(db.version).toBeCalled();
});
test("first column must be indexable", ()=>{
    expect(()=>runCreate([{keyword: "CREATE", items:["TABLE", "table", "(name NO_INDEX)"]}])).toThrow();
});

test("Does not add to storesColumns if auto increment", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":"++id,storeMe"
        });
    }
    setTableUndefined();
    runCreate([{keyword: "CREATE", items:["TABLE", "table", "(id AUTO_INCREMENT, storeMe)"]}]);
    expect(db.version).toBeCalled();
    runReady();
    expect(storesColumns.table).toStrictEqual(["storeMe"]);
});

test("Resolves immediately if schemas are equal", ()=>{
    expectFn = ()=>{};
    Object.defineProperty(stores, "table", {
        get: ()=>{ return {
            schema: {
                indexes:[{name:"sec"}],
                primKey: {
                    name:"prim"
                }
            }
        } },
        configurable: true
    });

    runCreate([{keyword: "CREATE", items:["TABLE", "table", "(prim, sec)"]}]);

    expect(db.version).not.toBeCalled();
});
test("Does not resolve immediately if schemas are not equal length", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":"prim,sec"
        });
    }
    Object.defineProperty(stores, "table", {
        get: ()=>{ return {
            schema: {
                indexes:[{name:"sec"}, {name: "third"}],
                primKey: {
                    name:"prim"
                }
            }
        } },
        configurable: true
    });

    runCreate([{keyword: "CREATE", items:["TABLE", "table", "(prim, sec)"]}]);

    expect(db.version).toBeCalled();
});
test("Does not resolve immediately if schemas are not equal", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":"prim,sec"
        });
    }
    Object.defineProperty(stores, "table", {
        get: ()=>{ return {
            schema: {
                indexes:[{name:"iyfrg"}],
                primKey: {
                    name:"prim"
                }
            }
        } },
        configurable: true
    });

    runCreate([{keyword: "CREATE", items:["TABLE", "table", "(prim, sec)"]}]);

    expect(db.version).toBeCalled();
});

test("stores[tableName] returns proper value", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":"one"
        });
    }
    setTableUndefined();
    runCreate([{keyword: "CREATE", items:["TABLE", "table", "(one)"]}]);

    expect(db.version).toBeCalled();

    expect(stores["table"]).toBe(db["table"]);
});

test("Rejects if problem", ()=>{
    expectFn = ()=>{};
    setTableUndefined();
    // @ts-ignore
    db.open = jest.fn(()=>Promise.reject());
    expect(()=>runCreate([{keyword: "CREATE", items:["TABLE", "table", "(one,two,three)"]}])).rejects;
    // @ts-ignore
    db.open = jest.fn(()=>Promise.resolve());
});

test("Rejects if too long", ()=>{
    expectFn = ()=>{};
    jest.useFakeTimers();
    setTableUndefined();
    expect(()=>runCreate([{keyword: "CREATE", items:["TABLE", "table", "(one,two,three)"]}])).rejects;
});