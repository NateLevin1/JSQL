import runCreate from "./runCreate";
import addDatabase from "./addDatabase";
jest.mock("../databases");
jest.mock("./addDatabase", ()=>jest.fn());

test("Must create a database or a table in a create statement", ()=>{
    expect(()=>runCreate([{ keyword: "CREATE", items: ["notDatabaseOrTable", "name"] }], {} as any)).toThrowError("Must create DATABASE or TABLE in CREATE clause. Instead found NOTDATABASEORTABLE.");
});
let runUpgradeFn = true;
describe("creating tables", ()=>{
    let expectFn = (newStores) => { };

    var runReady: Function;

    const database = {
        db: {
            on: jest.fn((event: string, callback: Function) => {
                if (event === "ready") {
                    runReady = callback;
                }
            }),
            version: jest.fn(() => {
                return {
                    stores: (newStores) => {
                        expectFn(newStores);
                        return {
                            upgrade: (callback) => { if(runUpgradeFn) { callback(); } }
                        }
                    }
                }
            }),
            open: jest.fn(() => Promise.resolve()),
            isOpen: () => true,
            close: () => { }
        },
        stores: {},
        storesColumns: {},
        deleteAllStores: () => {
            database.stores = {};
            database.storesColumns = {};
        }
    };

    afterEach(() => {
        database.deleteAllStores();
    });

    test("Throws if no structure", () => {
        expect(()=>runCreate([{ keyword: "CREATE", items: ["TABLE", "table"] }], database as any)).toThrow();
    });

    test("Works correctly with one", () => {
        expectFn = (newStores) => {
            expect(newStores).toStrictEqual({
                "table": "one"
            });
        }
        runCreate([{ keyword: "CREATE", items: ["TABLE", "table", "(one)"] }], database as any);
        expect(database.db.version).toBeCalled();
    });
    test("Works correctly with multiple", () => {
        expectFn = (newStores) => {
            expect(newStores).toStrictEqual({
                "table": "one,two,three"
            });
        }
        runCreate([{ keyword: "CREATE", items: ["TABLE", "table", "(one,two,three)"] }], database as any);
        expect(database.db.version).toBeCalled();
    });
    test("AUTO_INCREMENT works", () => {
        expectFn = (newStores) => {
            expect(newStores).toStrictEqual({
                "table": "++id"
            });
        }
        runCreate([{ keyword: "CREATE", items: ["TABLE", "table", "(id AUTO_INCREMENT)"] }], database as any);

        expect(database.db.version).toBeCalled();
    });
    test("UNIQUE works", () => {
        expectFn = (newStores) => {
            expect(newStores).toStrictEqual({
                "table": "&id"
            });
        }
        runCreate([{ keyword: "CREATE", items: ["TABLE", "table", "(id UNIQUE)"] }], database as any);

        expect(database.db.version).toBeCalled();
    });
    test("NO_INDEX works", () => {
        expectFn = (newStores) => {
            expect(newStores).toStrictEqual({
                "table": "++id"
            });
        }
        runCreate([{ keyword: "CREATE", items: ["TABLE", "table", "(id AUTO_INCREMENT, name NO_INDEX)"] }], database as any);

        expect(database.db.version).toBeCalled();
    });

    test("Works correctly with spaces", () => {
        expectFn = (newStores) => {
            expect(newStores).toStrictEqual({
                "table": "one,two"
            });
        }
        runCreate([{ keyword: "CREATE", items: ["TABLE", "table", "( one, two )"] }], database as any);

        expect(database.db.version).toBeCalled();
    });

    test("Works correctly with lowercase TABLE", () => {
        expectFn = (newStores) => {
            expect(newStores).toStrictEqual({
                "table": "one"
            });
        }
        runCreate([{ keyword: "CREATE", items: ["table", "table", "(one)"] }], database as any);

        expect(database.db.version).toBeCalled();
    });
    test("first column must be indexable", () => {
        expect(() => runCreate([{ keyword: "CREATE", items: ["TABLE", "table", "(name NO_INDEX)"] }], database as any)).toThrow();
    });

    test("Does not add to storesColumns if auto increment", () => {
        expectFn = (newStores) => {
            expect(newStores).toStrictEqual({
                "table": "++id,storeMe"
            });
        }
        runCreate([{ keyword: "CREATE", items: ["TABLE", "table", "(id AUTO_INCREMENT, storeMe)"] }], database as any);
        expect(database.db.version).toBeCalled();
        runReady();
        expect(database.storesColumns["table"]).toStrictEqual(["storeMe"]);
    });

    test("Resolves immediately if schemas are equal", () => {
        expectFn = () => { };
        Object.defineProperty(database.stores, "table", {
            get: () => {
                return {
                    schema: {
                        indexes: [{ name: "sec" }],
                        primKey: {
                            name: "prim"
                        }
                    }
                }
            },
            configurable: true
        });

        runCreate([{ keyword: "CREATE", items: ["TABLE", "table", "(prim, sec)"] }], database as any);

        expect(database.db.version).not.toBeCalled();
    });
    test("Does not resolve immediately if schemas are not equal length", () => {
        expectFn = (newStores) => {
            expect(newStores).toStrictEqual({
                "table": "prim,sec"
            });
        }
        Object.defineProperty(database.stores, "table", {
            get: () => {
                return {
                    schema: {
                        indexes: [{ name: "sec" }, { name: "third" }],
                        primKey: {
                            name: "prim"
                        }
                    }
                }
            },
            configurable: true
        });

        runCreate([{ keyword: "CREATE", items: ["TABLE", "table", "(prim, sec)"] }], database as any);

        expect(database.db.version).toBeCalled();
    });
    test("Does not resolve immediately if schemas are not equal", () => {
        expectFn = (newStores) => {
            expect(newStores).toStrictEqual({
                "table": "prim,sec"
            });
        }
        Object.defineProperty(database.stores, "table", {
            get: () => {
                return {
                    schema: {
                        indexes: [{ name: "iyfrg" }],
                        primKey: {
                            name: "prim"
                        }
                    }
                }
            },
            configurable: true
        });

        runCreate([{ keyword: "CREATE", items: ["TABLE", "table", "(prim, sec)"] }], database as any);

        expect(database.db.version).toBeCalled();
    });

    test("stores[tableName] returns proper value", () => {
        expectFn = (newStores) => {
            expect(newStores).toStrictEqual({
                "table": "one"
            });
        }
        runCreate([{ keyword: "CREATE", items: ["TABLE", "table", "(one)"] }], database as any);

        expect(database.db.version).toBeCalled();

        expect(database.stores["table"]).toBe(database.db["table"]);
    });

    test("Rejects if problem", () => {
        runUpgradeFn = false;
        expectFn = () => { };
        database.db.open = jest.fn(() => Promise.reject());
        expect(() => runCreate([{ keyword: "CREATE", items: ["TABLE", "table", "(one,two,three)"] }], database as any)).rejects.toBe("There was a problem opening the database. undefined");
        database.db.open = jest.fn(() => Promise.resolve());
        runUpgradeFn = true;
    });

    test("Rejects if too long", () => {
        runUpgradeFn = false;
        expectFn = () => { };
        jest.useFakeTimers();
        // @ts-ignore
        setTimeout.mockImplementationOnce((callback, time)=>{callback();});
        expect(() => runCreate([{ keyword: "CREATE", items: ["TABLE", "table", "(one,two,three)"] }], database as any)).rejects.toBe("Opening the database took longer than expected.");
        expect(setTimeout).toBeCalled();
        runUpgradeFn = true;
    });
});

describe("creating databases", ()=>{
    test("calls addDatabase with correct name", ()=>{
        runCreate([{keyword: "CREATE", items: ["DATABASE", "db"]}], {} as any);
        expect(addDatabase).toBeCalledWith("db");
    });
});