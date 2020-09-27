import zoom from "./zoom";
import editor from "./setupMonaco";
jest.mock("./setupMonaco");

// @ts-ignore
editor.getOption.mockImplementation(()=>16);

test("zooming increases font size", ()=>{
    zoom(1);

    // @ts-ignore
    expect(editor.updateOptions).toBeCalledWith({fontSize: 17});
});
test("zooming by negative decreases font size", ()=>{
    zoom(-1);

    // @ts-ignore
    expect(editor.updateOptions).toBeCalledWith({fontSize: 15});
});