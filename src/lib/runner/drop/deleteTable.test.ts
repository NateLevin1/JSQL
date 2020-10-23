import deleteTable from "./deleteTable";

var upgradeCallback:Function;

var onCallback: Function;

const database = {
    db: {
        isOpen: jest.fn(()=>true),
        close: ()=>{},
        version: jest.fn(()=>{
            return {
                stores: (newStores)=>{
                    expect(newStores).toStrictEqual({
                        "name":null
                    });
                    return {
                        upgrade:(callback)=>{ upgradeCallback = callback; }
                    }
                }
            }
        }),
        on: jest.fn((type, callback)=>{
            onCallback = callback;
        }),
        open: jest.fn(()=>Promise.resolve())
    }
}

test("Sets table to null when deleteTable is called", ()=>{
    database.db.open = jest.fn(()=>Promise.resolve());
    deleteTable("name", database as any);
    onCallback();
    upgradeCallback();
    expect(database.db.isOpen).toBeCalled();
    expect(database.db.version).toBeCalled();
});

test("rejects if db open fails", ()=>{
    database.db.open = jest.fn(()=>Promise.reject("r"));
    expect(()=>deleteTable("name", database as any)).rejects.toBe("There was a problem opening the database. r");
});