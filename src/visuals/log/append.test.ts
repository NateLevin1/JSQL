describe("Appending to console", ()=>{
    test("Append appends a node with proper text and class", ()=>{
        document.body.innerHTML = `
        <div id="output"></div>
        `;
        const append = require("./append");
        append.default("class", "text");
        expect(document.body.innerHTML).toBe(`
        <div id="output"><p class="class">text</p></div>
        `);
    });
});