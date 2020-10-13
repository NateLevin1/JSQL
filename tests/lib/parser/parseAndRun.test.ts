import "fake-indexeddb/auto";
import parseAndRun from "../../../src/lib/parser/parseAndRun";
jest.deepUnmock('dexie');

// Since this is async, the below can sometimes fail
// describe("select", ()=>{
//     test("select * works", ()=>{
//         increaseVersion();
//         db.version(version).stores({
//             sel: "++id"
//         });
//         db.open();

//         // @ts-ignore
//         stores.sel = db.sel;

//         // @ts-ignore
//         stores.sel.bulkAdd([{num: 0}, {num: 5}]);
//         // @ts-ignore
//         return parseAndRun("SELECT * from sel").then(result => {
//             expect(result).toStrictEqual([{id: 1, num: 0}, {id: 2, num: 5}]);
//         });
//     });
    
//     test("select col works", ()=>{
//         db.close();
//         increaseVersion();
//         db.version(version).stores({
//             sel2: "++id"
//         });
//         db.open();

//         // @ts-ignore
//         stores.sel2 = db.sel2;

//         // @ts-ignore
//         stores.sel2.bulkAdd([{num: 0}, {num: 5}]);
//         // @ts-ignore
//         return parseAndRun("SELECT id from sel2").then(result => {
//             expect(result).toStrictEqual([1, 2]);
//             db.close();
//         });
//     });
// });

// describe("create", ()=>{
//     test("CREATE TABLE works", ()=>{
//         let oldVersion = version;
//         // @ts-ignore
//         parseAndRun(`CREATE TABLE cre (\n\t\tid AUTO_INCREMENT,\n\t\tnum\n)`)
//         expect(storesColumns).toStrictEqual({
//             cre: [
//                 // no "id" because it is auto-incremented and shouldn't be changed in insert into
//                 "num"
//             ]
//         });
//         expect(version).toBe(oldVersion+1);
//         expect(stores.cre).toBeTruthy();
//         expect(stores.cre.schema.primKey.name).toBe("id");
//     });
// });

test("everything works together: CREATE TABLE works + INSERT INTO works + SELECT works + Multiple tables can be made", ()=>{
    
    // parseAndRun(`CREATE TABLE tbl (\n\t\tid AUTO_INCREMENT,\n\t\tnum\n)`);
    // @ts-ignore
    return parseAndRun(`CREATE TABLE ins (\n\t\tid AUTO_INCREMENT,\n\t\tnum\n)`).then(()=>{
        parseAndRun(`CREATE TABLE bruh (\n\t\tid AUTO_INCREMENT,\n\t\tnum\n)`).then(()=>{
            parseAndRun("INSERT INTO ins VALUES (1),(2),(3),(4)").then(()=>{
                // @ts-ignore
                parseAndRun("SELECT * from ins").then(result => {
                    expect(result).toStrictEqual([{id: 1, num: 1}, {id: 2, num: 2}, {id: 3, num: 3}, {id: 4, num: 4}]);
                });
            });
        });
    });
    // @ts-ignore
});