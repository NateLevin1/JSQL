import runInsert from "./runInsert";
import stores, { storesColumns } from "../stores";
import { Table } from "dexie";
jest.mock("../stores");

test("works with adding one row, one column item", ()=>{
    stores.db = {
        bulkAdd: (processedNewRows: any[])=>{
            expect(processedNewRows).toStrictEqual([{col: 1}]);
        }
    } as unknown as Table;
    storesColumns.db = ["col"];
    runInsert([{keyword:"INSERT", items:["INTO", "db"]}, {keyword:"VALUES", items:["(1)"]}]);
});
test("works with adding one row, lowercase into, one column item", ()=>{
    stores.db = {
        bulkAdd: (processedNewRows: any[])=>{
            expect(processedNewRows).toStrictEqual([{col: 1}]);
        }
    } as unknown as Table;
    storesColumns.db = ["col"];
    runInsert([{keyword:"INSERT", items:["into", "db"]}, {keyword:"VALUES", items:["(1)"]}]);
});
test("works with adding multiple rows, one column item", ()=>{
    stores.db = {
        bulkAdd: (processedNewRows: any[])=>{
            expect(processedNewRows).toStrictEqual([{col: 1}, {col: 2}, {col: 3}]);
        }
    } as unknown as Table;
    storesColumns.db = ["col"];
    runInsert([{keyword:"INSERT", items:["INTO", "db"]}, {keyword:"VALUES", items:["(1), (2), (3)"]}]);
});
test("works with adding multiple rows, multiple column items", ()=>{
    stores.db = {
        bulkAdd: (processedNewRows: any[])=>{
            expect(processedNewRows).toStrictEqual([{col: 1, col2:2}, {col: 1, col2:2}]);
        }
    } as unknown as Table;
    storesColumns.db = ["col", "col2"];
    runInsert([{keyword:"INSERT", items:["INTO", "db"]}, {keyword:"VALUES", items:["(1,2), (1,2)"]}]);
});

test("throws on non-values", ()=>{
    expect(()=>runInsert([{keyword:"INSERT", items:["INTO", "db"]}, {keyword:"NOTVALUES", items:["(1,2), (1,2)"]}])).toThrow();
});

test("throws on not a table", ()=>{
    stores.db = null;
    storesColumns.db = null;
    expect(()=>runInsert([{keyword:"INSERT", items:["INTO", "db"]}, {keyword:"VALUES", items:["(1,2), (1,2)"]}])).toThrow();
});