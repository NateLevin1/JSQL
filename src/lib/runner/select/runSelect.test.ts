import runSelect from "./runSelect";
import { Table } from "dexie";

const database = {
    db: {},
    stores: {} as {[key: string]: object},
    storesColumns: {}
}

test("queries correct table", ()=>{
    let dbItems = [{ n: 1 }, { n: 2 }];
    database.stores.db = {
        toArray: ()=>{
            return new Promise((resolve)=>{
                resolve(dbItems);
            });
        }
    } as unknown as Table;
    return runSelect([{keyword: "SELECT", items:[["*"]]}, {keyword: "FROM", items:[["db"]]}], database as any).then(result=>{
        expect(result).toStrictEqual(dbItems);
    });
});


test("works correctly with multiple columns", ()=>{
    let dbItems = [{ n: 1, id:1 }, { n: 2, id:2 }];
    database.stores.db = {
        toArray: ()=>{
            return new Promise((resolve)=>{
                resolve(dbItems);
            });
        }
    } as unknown as Table;
    return runSelect([{keyword: "SELECT", items:[["n", "id"]]}, {keyword: "FROM", items:[["db"]]}], database as any).then(result=>{
        expect(result).toStrictEqual(dbItems.map(v=>{return {n: v.n, id: v.id}; }));
    });
});

test("only returns the data if select items is not *", ()=>{
    let dbItems = [{ n: 1 }, { n: 2 }];
    database.stores.db = {
        toArray: ()=>{
            return new Promise((resolve)=>{
                resolve(dbItems);
            });
        }
    } as unknown as Table;
    return runSelect([{keyword: "SELECT", items:[["n"]]}, {keyword: "FROM", items:[["db"]]}], database as any).then(result=>{
        expect(result).toStrictEqual(dbItems.map(v=>v.n));
    });
});

test("queries all tables if no FROM clause", ()=>{
    let dbItems = [{ n: 1 }, { n: 2 }];
    database.stores.db = {
        toArray: ()=>{
            return new Promise((resolve)=>{
                resolve(dbItems);
            });
        }
    } as unknown as Table;

    database.stores.db2 = {
        toArray: ()=>{
            return new Promise((resolve)=>{
                resolve(dbItems);
            });
        }
    } as unknown as Table;


    return runSelect([ {keyword: "SELECT", items:[["*"]]}], database as any).then(result=>{
        expect(result).toStrictEqual({ db: dbItems, db2:dbItems } );
    });
});

test("queries all tables if from clause is *", ()=>{
    let dbItems = [{ n: 1 }, { n: 2 }];
    database.stores.db = {
        toArray: ()=>{
            return new Promise((resolve)=>{
                resolve(dbItems);
            });
        }
    } as unknown as Table;

    database.stores.db2 = {
        toArray: ()=>{
            return new Promise((resolve)=>{
                resolve(dbItems);
            });
        }
    } as unknown as Table;


    return runSelect([ {keyword: "SELECT", items:[["*"]]}, {keyword: "FROM", items:[["*"]]}], database as any).then(result=>{
        expect(result).toStrictEqual({ db: dbItems, db2:dbItems } );
    });
});

test("throws error if table doesn't exist", ()=>{
    expect(()=>runSelect([{keyword: "SELECT", items:[["*"]]}, {keyword: "FROM", items:[["non-existant"]]}], {stores:{}} as any)).rejects.toBe("Table non-existant does not exist.");
});

describe("WHERE clause", ()=>{
    let dbItems = [{ n: 1, str:"name" }, { n: 1 }, { n: 2, str:"nAmE" }];
    let newDB = {
        where: (identifier: string)=>{
            return {
                equals: (value: any)=>{
                    let newVals = dbItems.filter(obj=>obj[identifier] === value);
                    return {
                        toArray: ()=>{
                            return new Promise((resolve)=>{
                                resolve(newVals);
                            });
                        }
                    }
                },
                equalsIgnoreCase: (value: any)=>{
                    let newVals = dbItems.filter(obj=>{return obj[identifier]?.toLowerCase() === value.toLowerCase()});
                    return {
                        toArray: ()=>{
                            return new Promise((resolve)=>{
                                resolve(newVals);
                            });
                        }
                    }
                },
                notEqual: (value: any)=>{
                    let newVals = dbItems.filter(obj=>obj[identifier] !== value);
                    return {
                        toArray: ()=>{
                            return new Promise((resolve)=>{
                                resolve(newVals);
                            });
                        }
                    }
                },
                above: (value: any)=>{
                    let newVals = dbItems.filter(obj=>obj[identifier] > value);
                    return {
                        toArray: ()=>{
                            return new Promise((resolve)=>{
                                resolve(newVals);
                            });
                        }
                    }
                },
                aboveOrEqual: (value: any)=>{
                    let newVals = dbItems.filter(obj=>obj[identifier] >= value);
                    return {
                        toArray: ()=>{
                            return new Promise((resolve)=>{
                                resolve(newVals);
                            });
                        }
                    }
                },
                below: (value: any)=>{
                    let newVals = dbItems.filter(obj=>obj[identifier] < value);
                    return {
                        toArray: ()=>{
                            return new Promise((resolve)=>{
                                resolve(newVals);
                            });
                        }
                    }
                },
                belowOrEqual: (value: any)=>{
                    let newVals = dbItems.filter(obj=>obj[identifier] <= value);
                    return {
                        toArray: ()=>{
                            return new Promise((resolve)=>{
                                resolve(newVals);
                            });
                        }
                    }
                }
            }
        }
    } as unknown as Table;
    test("= works", ()=>{
        database.stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:[["n"]]}, {keyword: "FROM", items:[["db"]]}, {keyword: "WHERE", items:[{left:"n", operator:"=", right:"1"}]}], database as any).then(result=>{
            expect(result).toStrictEqual([1, 1]);
        });
    });
    test("IGNORECASE= works", ()=>{
        database.stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:[["str"]]}, {keyword: "FROM", items:[["db"]]}, {keyword: "WHERE", items:[{left:"str", operator:"IGNORECASE=", right:"'NAME'"}]}], database as any).then(result=>{
            expect(result).toStrictEqual(["name", "nAmE"]);
        });
    });
    test("<> works", ()=>{
        database.stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:[["n"]]}, {keyword: "FROM", items:[["db"]]}, {keyword: "WHERE", items:[{left:"n", operator:"<>", right:"1"}]}], database as any).then(result=>{
            expect(result).toStrictEqual([2]);
        });
    });
    test("!= works", ()=>{
        database.stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:[["n"]]}, {keyword: "FROM", items:[["db"]]}, {keyword: "WHERE", items:[{left:"n", operator:"!=", right:"1"}]}], database as any).then(result=>{
            expect(result).toStrictEqual([2]);
        });
    });
    test("> works", ()=>{
        database.stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:[["n"]]}, {keyword: "FROM", items:[["db"]]}, {keyword: "WHERE", items:[{left:"n", operator:">", right:"1"}]}], database as any).then(result=>{
            expect(result).toStrictEqual([2]);
        });
    });
    test(">= works", ()=>{
        database.stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:[["n"]]}, {keyword: "FROM", items:[["db"]]}, {keyword: "WHERE", items:[{left:"n", operator:">=", right:"1"}]}], database as any).then(result=>{
            expect(result).toStrictEqual([1, 1, 2]);
        });
    });
    test("< works", ()=>{
        database.stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:[["n"]]}, {keyword: "FROM", items:[["db"]]}, {keyword: "WHERE", items:[{left:"n", operator:"<", right:"2"}]}], database as any).then(result=>{
            expect(result).toStrictEqual([1, 1]);
        });
    });
    test("<= works", ()=>{
        database.stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:[["n"]]}, {keyword: "FROM", items:[["db"]]}, {keyword: "WHERE", items:[{left:"n", operator:"<=", right:"2"}]}], database as any).then(result=>{
            expect(result).toStrictEqual([1, 1, 2]);
        });
    });
});