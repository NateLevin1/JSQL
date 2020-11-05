import { Table } from "dexie";
import where from "./where";

let dbItems = [{ n: 1, str: "name" }, { n: 1 }, { n: 2, str: "nAmE" }];
let table = {
    toCollection: ()=>{
        return [];
    },
    where: (identifier: string) => {
        return {
            equals: (value: any) => {
                let newVals = dbItems.filter(obj => obj[identifier] === value);
                return {
                    toArray: () => {
                        return new Promise((resolve) => {
                            resolve(newVals);
                        });
                    }
                }
            },
            equalsIgnoreCase: (value: any) => {
                let newVals = dbItems.filter(obj => { return obj[identifier]?.toLowerCase() === value.toLowerCase() });
                return {
                    toArray: () => {
                        return new Promise((resolve) => {
                            resolve(newVals);
                        });
                    }
                }
            },
            notEqual: (value: any) => {
                let newVals = dbItems.filter(obj => obj[identifier] !== value);
                return {
                    toArray: () => {
                        return new Promise((resolve) => {
                            resolve(newVals);
                        });
                    }
                }
            },
            above: (value: any) => {
                let newVals = dbItems.filter(obj => obj[identifier] > value);
                return {
                    toArray: () => {
                        return new Promise((resolve) => {
                            resolve(newVals);
                        });
                    }
                }
            },
            aboveOrEqual: (value: any) => {
                let newVals = dbItems.filter(obj => obj[identifier] >= value);
                return {
                    toArray: () => {
                        return new Promise((resolve) => {
                            resolve(newVals);
                        });
                    }
                }
            },
            below: (value: any) => {
                let newVals = dbItems.filter(obj => obj[identifier] < value);
                return {
                    toArray: () => {
                        return new Promise((resolve) => {
                            resolve(newVals);
                        });
                    }
                }
            },
            belowOrEqual: (value: any) => {
                let newVals = dbItems.filter(obj => obj[identifier] <= value);
                return {
                    toArray: () => {
                        return new Promise((resolve) => {
                            resolve(newVals);
                        });
                    }
                }
            }
        }
    }
} as unknown as Table;
test("= works", () => {
    return where(table, { left: "n", operator: "=", right: "1" }).toArray().then(result => {
        expect(result.map(v=>v.n)).toStrictEqual([1, 1]);
    });
});
test("IGNORECASE= works", () => {
    return where(table, { left: "str", operator: "IGNORECASE=", right: "'NAME'" }).toArray().then(result => {
        expect(result.map(v=>v.str)).toStrictEqual(["name", "nAmE"]);
    });
});
test("<> works", () => {
    return where(table, { left: "n", operator: "<>", right: "1" }).toArray().then(result => {
        expect(result.map(v=>v.n)).toStrictEqual([2]);
    });
});
test("!= works", () => {
    return where(table, { left: "n", operator: "!=", right: "1" }).toArray().then(result => {
        expect(result.map(v=>v.n)).toStrictEqual([2]);
    });
});
test("> works", () => {
    return where(table, { left: "n", operator: ">", right: "1" }).toArray().then(result => {
        expect(result.map(v=>v.n)).toStrictEqual([2]);
    });
});
test(">= works", () => {
    return where(table, { left: "n", operator: ">=", right: "1" }).toArray().then(result => {
        expect(result.map(v=>v.n)).toStrictEqual([1, 1, 2]);
    });
});
test("< works", () => {
    return where(table, { left: "n", operator: "<", right: "2" }).toArray().then(result => {
        expect(result.map(v=>v.n)).toStrictEqual([1, 1]);
    });
});
test("<= works", () => {
    return where(table, { left: "n", operator: "<=", right: "2" }).toArray().then(result => {
        expect(result.map(v=>v.n)).toStrictEqual([1, 1, 2]);
    });
});