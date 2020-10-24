import evaluate from "./evaluate";
import clear from "./clear";
import editor from "../monaco/setupMonaco";
jest.mock("./evaluate", () => jest.fn());
jest.mock("./clear", () => jest.fn());
jest.mock("../monaco/setupMonaco");

document.body.innerHTML = `
    <button id="run">Run</button>
    <button id="clear">Clear</button>
    `;
require("./clicks");
test("Clicking run triggers evaluation", () => {
    // @ts-ignore
    editor.getValue.mockImplementation(() => "console.log(1)");
    document.getElementById("run").click();
    expect(evaluate).toBeCalledWith("console.log(1)");
});
test("Clicking clear triggers clear", () => {
    document.getElementById("clear").click();
    expect(clear).toBeCalledTimes(1);
});