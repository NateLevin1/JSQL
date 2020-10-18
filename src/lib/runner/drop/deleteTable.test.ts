import { db } from "../stores";
import deleteTable from "./deleteTable";

jest.mock("../stores");
db.isOpen = jest.fn(()=>true);
db.close = ()=>{};
var upgradeCallback:Function;
db.version = jest.fn(()=>{
    return {
        stores: (newStores)=>{
            expect(newStores).toStrictEqual({
                "name":null
            });
            return {
                upgrade:(callback)=>{upgradeCallback = callback;}
            }
        }
    }
}) as any;

var onCallback: Function;
db.on = jest.fn((type, callback)=>{
    onCallback = callback;
}) as any;



test("Sets table to null when deleteTable is called", ()=>{
    db.open = jest.fn(()=>Promise.resolve()) as any;
    deleteTable("name");
    onCallback();
    upgradeCallback();
    expect(db.isOpen).toBeCalled();
    expect(db.version).toBeCalled();
});

test("rejects if db open fails", ()=>{
    db.open = jest.fn(()=>Promise.reject("r")) as any;
    expect(()=>deleteTable("name")).rejects.toBe("There was a problem opening the database. r");
});