import evaluate from "./evaluate";
import editor from "../monaco/setupMonaco";
jest.mock("./evaluate", ()=>jest.fn());
jest.mock("../monaco/setupMonaco");

describe("Running code works properly", ()=>{
    test("Clicking run triggers evaluation", ()=>{
        document.body.innerHTML = `
        <button id="run">Run</button>
        `;
        // @ts-ignore
        editor.getValue.mockImplementation(()=>"console.log(1)");
        require("./run");
        document.getElementById("run").click();
        expect(evaluate).toBeCalledWith("console.log(1)");
    });
});