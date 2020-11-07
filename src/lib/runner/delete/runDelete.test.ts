import runDelete from "./runDelete";
import where from "../where/where";
jest.mock("../where/where");

let numOfItems = 1;
const collect = { delete: jest.fn(()=>Promise.resolve(numOfItems)) }
// @ts-ignore
where.mockImplementation(()=>collect);
const db = {
    db: {},
    stores: {
        tbl: {
            toCollection() {
                return collect;
            }
        },
        tbl2: {
            toCollection() {
                return collect;
            }
        }
    },
    storesColumns: {
        tbl: ["num"],
        tbl2: ["num"]
    },
} as any;

test("works with no where clause", ()=>{
    return runDelete([{keyword: "DELETE", items:["FROM", ["tbl"]]}], db).then((deletedByTbl: number[])=>{
        expect(deletedByTbl[0]).toBe(1);
        expect(collect.delete).toBeCalledTimes(1);
        expect(where).not.toBeCalled();
    });
});

test("works with where clause", ()=>{
    return runDelete([{keyword: "DELETE", items:["FROM", ["tbl"]]}, {keyword: "WHERE", items:["WhereClauseShouldGoHereButCantBecauseOfJestBeingStrange"]}], db).then((deletedByTbl: number[])=>{
        expect(collect.delete).toBeCalledTimes(1);
        expect(where).toBeCalledWith(db.stores.tbl, "WhereClauseShouldGoHereButCantBecauseOfJestBeingStrange");
    });
});

test("works with * as a tableName", ()=>{
    return runDelete([{keyword: "DELETE", items:["FROM", ["*"]]}], db).then((deletedByTbl: number[])=>{
        expect(collect.delete).toBeCalledTimes(2);
        expect(where).not.toBeCalled();
    });
});

test("throws if table doesn't exist", ()=>{
    expect(()=>runDelete([{keyword: "DELETE", items:["FROM", ["non-existent"]]}], db)).toThrowError("Table non-existent does not exist.");
});