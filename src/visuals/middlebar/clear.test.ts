test("clear clears the div on click", ()=>{
    document.body.innerHTML = `<div id="output">content-to-be-deleted-goes-here</div>`;
    const clear = require("./clear");
    clear.default();
    expect(document.body.innerHTML).toBe(`<div id="output"></div>`);
});