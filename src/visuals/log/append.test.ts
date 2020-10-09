import createDetails from "./createDetails";
jest.mock("./createDetails");
describe("Appending to console", ()=>{
    test("Append appends a node with proper text and class", ()=>{
        document.body.innerHTML = `
        <div id="output"></div>
        `;
        const append = require("./append");
        // @ts-ignore
        createDetails.mockImplementation(()=>{});
        append.default("class", "text");
        expect(document.body.innerHTML).toBe(`
        <div id="output"><p><span class="class">text</span></p></div>
        `);
        expect(createDetails).not.toBeCalled();
    });
    test("Append calls create details with objects properly", ()=>{
        document.body.innerHTML = `
        <div id="output"></div>
        `;
        const append = require("./append");
        // @ts-ignore
        createDetails.mockImplementation(()=>{});
        append.default("class", {one:1});
        expect(createDetails).toBeCalled();
        expect(document.body.innerHTML).toBe(`
        <div id="output"></div>
        `);
    });
});