import stores from "../stores";
import runSelect from "./runSelect";
import { Table } from "dexie";
jest.mock("../stores");

test("queries correct table", ()=>{
    let dbItems = [{ n: 1 }, { n: 2 }];
    stores.db = {
        toArray: ()=>{
            return new Promise((resolve)=>{
                resolve(dbItems);
            });
        }
    } as unknown as Table;
    return runSelect([{keyword: "SELECT", items:["*"]}, {keyword: "FROM", items:["db"]}]).then(result=>{
        expect(result).toStrictEqual(dbItems);
    });
});

test("only returns the data if select items is not *", ()=>{
    let dbItems = [{ n: 1 }, { n: 2 }];
    stores.db = {
        toArray: ()=>{
            return new Promise((resolve)=>{
                resolve(dbItems);
            });
        }
    } as unknown as Table;
    return runSelect([{keyword: "SELECT", items:["n"]}, {keyword: "FROM", items:["db"]}]).then(result=>{
        expect(result).toStrictEqual(dbItems.map(v=>v.n));
    });
});

test("queries all tables if no FROM clause", ()=>{
    let dbItems = [{ n: 1 }, { n: 2 }];
    stores.db = {
        toArray: ()=>{
            return new Promise((resolve)=>{
                resolve(dbItems);
            });
        }
    } as unknown as Table;

    stores.db2 = {
        toArray: ()=>{
            return new Promise((resolve)=>{
                resolve(dbItems);
            });
        }
    } as unknown as Table;


    return runSelect([ {keyword: "SELECT", items:["*"]} ]).then(result=>{
        expect(result).toStrictEqual([dbItems, dbItems]);
    });
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
        stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:["n"]}, {keyword: "FROM", items:["db"]}, {keyword: "WHERE", items:[{left:"n", operator:"=", right:"1"}]}]).then(result=>{
            expect(result).toStrictEqual([1, 1]);
        });
    });
    test("IGNORECASE= works", ()=>{
        stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:["str"]}, {keyword: "FROM", items:["db"]}, {keyword: "WHERE", items:[{left:"str", operator:"IGNORECASE=", right:"'NAME'"}]}]).then(result=>{
            expect(result).toStrictEqual(["name", "nAmE"]);
        });
    });
    test("<> works", ()=>{
        stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:["n"]}, {keyword: "FROM", items:["db"]}, {keyword: "WHERE", items:[{left:"n", operator:"<>", right:"1"}]}]).then(result=>{
            expect(result).toStrictEqual([2]);
        });
    });
    test("!= works", ()=>{
        stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:["n"]}, {keyword: "FROM", items:["db"]}, {keyword: "WHERE", items:[{left:"n", operator:"!=", right:"1"}]}]).then(result=>{
            expect(result).toStrictEqual([2]);
        });
    });
    test("> works", ()=>{
        stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:["n"]}, {keyword: "FROM", items:["db"]}, {keyword: "WHERE", items:[{left:"n", operator:">", right:"1"}]}]).then(result=>{
            expect(result).toStrictEqual([2]);
        });
    });
    test(">= works", ()=>{
        stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:["n"]}, {keyword: "FROM", items:["db"]}, {keyword: "WHERE", items:[{left:"n", operator:">=", right:"1"}]}]).then(result=>{
            expect(result).toStrictEqual([1, 1, 2]);
        });
    });
    test("< works", ()=>{
        stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:["n"]}, {keyword: "FROM", items:["db"]}, {keyword: "WHERE", items:[{left:"n", operator:"<", right:"2"}]}]).then(result=>{
            expect(result).toStrictEqual([1, 1]);
        });
    });
    test("<= works", ()=>{
        stores.db = newDB;
        return runSelect([{keyword: "SELECT", items:["n"]}, {keyword: "FROM", items:["db"]}, {keyword: "WHERE", items:[{left:"n", operator:"<=", right:"2"}]}]).then(result=>{
            expect(result).toStrictEqual([1, 1, 2]);
        });
    });
});