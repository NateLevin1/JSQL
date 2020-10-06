import runCreate from "./runCreate";
import { db, increaseVersion } from "../stores";

jest.mock("../stores");

// @ts-ignore
increaseVersion.mockImplementation(()=>null);
let expectFn = (newStores)=>{};
// @ts-ignore
db.version.mockImplementation(()=>{
    return {
        stores: (newStores)=>{
            expectFn(newStores);
        }
    }
});

// @ts-ignore
db.open.mockImplementation(()=>null);

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
    runCreate([{keyword: "CREATE", items:["TABLE", "table", "(one,two,three)"]}]);

    expect(db.version).toBeCalled();
});
test("AUTO_INCREMENT works", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":"++id"
        });
    }
    runCreate([{keyword: "CREATE", items:["TABLE", "table", "(id AUTO_INCREMENT)"]}]);

    expect(db.version).toBeCalled();
});
test("UNIQUE works", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":"&id"
        });
    }
    runCreate([{keyword: "CREATE", items:["TABLE", "table", "(id UNIQUE)"]}]);

    expect(db.version).toBeCalled();
});
test("NO_INDEX works", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":""
        });
    }
    runCreate([{keyword: "CREATE", items:["TABLE", "table", "(name NO_INDEX)"]}]);

    expect(db.version).toBeCalled();
});
test("NO_INDEX works", ()=>{
    expect(()=>runCreate([{keyword: "CREATE", items:["NOTTABLE", "table", "(name NO_INDEX)"]}])).toThrow();
});

test("Works correctly with spaces", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":"one,two"
        });
    }
    runCreate([{keyword: "CREATE", items:["TABLE", "table", "( one, two )"]}]);

    expect(db.version).toBeCalled();
});

test("Works correctly with lowercase TABLE", ()=>{
    expectFn = (newStores)=>{
        expect(newStores).toStrictEqual({
            "table":"one"
        });
    }
    runCreate([{keyword: "CREATE", items:["table", "table", "(one)"]}]);

    expect(db.version).toBeCalled();
});