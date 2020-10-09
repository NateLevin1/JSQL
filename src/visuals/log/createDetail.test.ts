import createDetails from "./createDetails";
test("Creates properly one level deep", ()=>{
    document.body.innerHTML = `
    <div id="output"></div>
    `;
    createDetails({a:1}, document.getElementById("output"), {} as HTMLElement);
    expect(document.body.innerHTML).toBe(`
    <div id="output"><details class="object-view"><summary>Object</summary><p>a: <span class="number">1</span></p></details></div>
    `);
});

test("Creates properly multiple levels deep", ()=>{
    document.body.innerHTML = `
    <div id="output"></div>
    `;
    createDetails({a:{b:2}}, document.getElementById("output"), {} as HTMLElement);
    expect(document.body.innerHTML).toBe(`
    <div id="output"><details class="object-view"><summary>Object</summary><p>a: <span class="object"><details class="object-view"><summary>Object</summary><p>b: <span class="number">2</span></p></details></span></p></details></div>
    `);
});