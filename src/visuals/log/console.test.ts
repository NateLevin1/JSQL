import visualConsole from "./console";
jest.mock("./append", ()=>jest.fn());
const append = require("./append");
describe("Visual console works as intended", ()=>{
    append.mockImplementation(()=>{});
    test("Log calls append with proper arguments", ()=>{
        visualConsole.log("text");
        expect(append).toBeCalledWith("log", `⠿ `, "text");
    });
    test("Error calls append with proper arguments", ()=>{
        visualConsole.error("text");
        expect(append).toBeCalledWith("error", "text");
    });
    test("Warn calls append with proper arguments", ()=>{
        visualConsole.warn("text");
        expect(append).toBeCalledWith("warn", "text");
    });
    test("LogF calls append with proper arguments", ()=>{
        visualConsole.logF("class", "text");
        expect(append).toBeCalledWith("class", "text");
    });
});