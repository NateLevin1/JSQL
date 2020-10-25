import { addNames } from "./databases";
import addDatabase from "./create/addDatabase";
import Dexie from "dexie";
jest.mock("./create/addDatabase", ()=>jest.fn());
Dexie.getDatabaseNames = jest.fn(()=>Promise.resolve([]));
test("adds to the database when addDatabase is called with empty arr", ()=>{
    addNames([]);
    expect(addDatabase).toBeCalledWith("__JSQL_DEFAULT__");
});
test("adds to the database when addDatabase is called with non-empty arr", ()=>{
    addNames(["name"]);
    expect(addDatabase).toBeCalledWith("name");
});