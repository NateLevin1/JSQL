import parseMultiPredicate from "./parseMultiPredicate";

test("works with one", ()=>{
    expect(parseMultiPredicate(" x = 1")).toStrictEqual({
        predicates: [
            {
                left: "x",
                operator: "=",
                right: "1"
            }
        ],
        rest:""
    });
});

test("works with multiple", ()=>{
    expect(parseMultiPredicate(" x = 1, y = 2")).toStrictEqual({
        predicates: [
            {
                left: "x",
                operator: "=",
                right: "1"
            },
            {
                left: "y",
                operator: "=",
                right: "2"
            }
        ],
        rest:""
    });
});

test("works with multiple with keywords", ()=>{
    expect(parseMultiPredicate(" x = true, y = 2")).toStrictEqual({
        predicates: [
            {
                left: "x",
                operator: "=",
                right: "true"
            },
            {
                left: "y",
                operator: "=",
                right: "2"
            }
        ],
        rest:""
    });
});

test("works with multiple, space between comma", ()=>{
    expect(parseMultiPredicate(" x = 1 , y = 2")).toStrictEqual({
        predicates: [
            {
                left: "x",
                operator: "=",
                right: "1"
            },
            {
                left: "y",
                operator: "=",
                right: "2"
            }
        ],
        rest:""
    });
});

test("stops at WHERE", ()=>{
    expect(parseMultiPredicate(" x = 1 WHERE y = 3")).toStrictEqual({
        predicates: [
            {
                left: "x",
                operator: "=",
                right: "1"
            }
        ],
        rest:"WHERE y = 3"
    });
});

test("stops if ending whitespace", ()=>{
    expect(parseMultiPredicate(" x = 1 ")).toStrictEqual({
        predicates: [
            {
                left: "x",
                operator: "=",
                right: "1"
            }
        ],
        rest:""
    });
});