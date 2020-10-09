import evaluate from "./evaluate";
import visualConsole from "../log/console";
jest.mock("../log/console");
describe("evaluation works", ()=>{
    //@ts-ignore
    visualConsole.log.mockImplementation(()=>{});
    //@ts-ignore
    visualConsole.error.mockImplementation(()=>{});
    //@ts-ignore
    visualConsole.warn.mockImplementation(()=>{}); 

    // don't show up in jest's output
    console.log = jest.fn();
    console.warn = jest.fn();
    console.error = jest.fn();

    test("Evaluation logs to correct place", ()=>{
        evaluate("console.log(1)");
        expect(visualConsole.log).toBeCalledWith(1);
    });
    test("Evaluation warns to correct place", ()=>{
        evaluate("console.warn(1)");
        expect(visualConsole.warn).toBeCalledWith(1);
    });
    test("Evaluation errors to correct place", ()=>{
        evaluate("console.error(1)");
        expect(visualConsole.error).toBeCalledWith(1);
    });
    test("Evaluation errors to correct place if thrown", ()=>{
        return evaluate("throw 1").finally(()=>{
            expect(visualConsole.error).toBeCalledWith(1);
        });
    });
});
