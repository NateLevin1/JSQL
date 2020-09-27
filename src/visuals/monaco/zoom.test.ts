import zoom from "./zoom";
import editor from "./setupMonaco";
jest.mock("./setupMonaco");
test("zooming increases font size", ()=>{
    // @ts-ignore
    editor.getOption.mockImplementation(()=>16);

    zoom(1);

    // @ts-ignore
    expect(editor.updateOptions).toBeCalled();
});