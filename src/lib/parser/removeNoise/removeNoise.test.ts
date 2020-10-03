import removeNoise from "./removeNoise";

test("Removes semicolons", ()=>{
    expect(removeNoise("from db;")).toBe("from db");
});

test("Removes ending whitespace", ()=>{
    expect(removeNoise("text      ")).toBe("text");
});

test("Removes multiline comments", ()=>{
    expect(removeNoise("text/**/")).toBe("text");
});

test("Removes single line comments", ()=>{
    expect(removeNoise("text-- comment")).toBe("text");
});

test("Removes newlines, replaces with space", ()=>{
    expect(removeNoise("text\nmore text")).toBe("text more text");
});

test("Removes tabs, replaces with space", ()=>{
    expect(removeNoise("text\tmore text")).toBe("text more text");
});

test("Removes doubled whitespace", ()=>{
    expect(removeNoise("text     more      text")).toBe("text more text");
});