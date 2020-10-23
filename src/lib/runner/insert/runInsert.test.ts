import runInsert from "./runInsert";
import { Table } from "dexie";

const database = {
    db:{},
    stores: {} as {[key: string]: object},
    storesColumns: {} as {[key: string]: string[]}
}

test("works with adding one row, one column item", ()=>{
    database.stores.db = {
        bulkAdd: (processedNewRows: any[])=>{
            expect(processedNewRows).toStrictEqual([{col: 1}]);
        }
    } as unknown as Table;
    database.storesColumns.db = ["col"];
    runInsert([{keyword:"INSERT", items:["INTO", "db"]}, {keyword:"VALUES", items:["(1)"]}], database as any);
});
test("works with adding one row, lowercase into, one column item", ()=>{
    database.stores.db = {
        bulkAdd: (processedNewRows: any[])=>{
            expect(processedNewRows).toStrictEqual([{col: 1}]);
        }
    } as unknown as Table;
    database.storesColumns.db = ["col"];
    runInsert([{keyword:"INSERT", items:["into", "db"]}, {keyword:"VALUES", items:["(1)"]}], database as any);
});
test("works with adding multiple rows, one column item", ()=>{
    database.stores.db = {
        bulkAdd: (processedNewRows: any[])=>{
            expect(processedNewRows).toStrictEqual([{col: 1}, {col: 2}, {col: 3}]);
        }
    } as unknown as Table;
    database.storesColumns.db = ["col"];
    runInsert([{keyword:"INSERT", items:["INTO", "db"]}, {keyword:"VALUES", items:["(1), (2), (3)"]}], database as any);
});
test("works with adding multiple rows, multiple column items", ()=>{
    database.stores.db = {
        bulkAdd: (processedNewRows: any[])=>{
            expect(processedNewRows).toStrictEqual([{col: 1, col2:2}, {col: 1, col2:2}]);
        }
    } as unknown as Table;
    database.storesColumns.db = ["col", "col2"];
    runInsert([{keyword:"INSERT", items:["INTO", "db"]}, {keyword:"VALUES", items:["(1,2), (1,2)"]}], database as any);
});

test("throws on non-values", ()=>{
    expect(()=>runInsert([{keyword:"INSERT", items:["INTO", "db"]}, {keyword:"NOTVALUES", items:["(1,2), (1,2)"]}], database as any)).toThrow();
});

test("throws on not a table", ()=>{
    database.stores.db = null;
    database.storesColumns.db = null;
    expect(()=>runInsert([{keyword:"INSERT", items:["INTO", "db"]}, {keyword:"VALUES", items:["(1,2), (1,2)"]}], database as any)).toThrow();
});