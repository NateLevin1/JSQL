import { db } from "../stores";
import deleteTable from "./deleteTable";

jest.mock("../stores");

db.version = jest.fn(()=>{
    return {
        stores: (newStores)=>{
            expect(newStores).toStrictEqual({
                "name":null
            });
            return {
                upgrade:()=>{}
            }
        }
    }
}) as any;

db.open = jest.fn(()=>Promise.resolve() as any);

test("Sets table to null when deleteTable is called", ()=>{
    deleteTable("name");
});