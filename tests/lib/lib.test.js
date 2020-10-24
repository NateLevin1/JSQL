import "fake-indexeddb/auto";
jest.deepUnmock('dexie');
import { Table, Database } from "../../lib/jsql";

const isClass = function (classOrFunc) {
    return typeof classOrFunc === 'function' 
      && /^class\s/.test(Function.prototype.toString.call(classOrFunc));
  }

test("Table is not undefined and is an ES6 class", ()=>{
    expect(Table).not.toBe(undefined);
    expect(isClass(Table)).toBe(true);
});

test("Database is not undefined and is an ES6 class", ()=>{
    expect(Database).not.toBe(undefined);
    expect(isClass(Database)).toBe(true);
});