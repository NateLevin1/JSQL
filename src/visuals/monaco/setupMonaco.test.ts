require("./setupMonaco");
import zoom from "./zoom";
jest.mock("./zoom.ts", ()=>jest.fn());

test("Editor is zoomed in on keydown = and ctrl (platform = windows)", ()=>{
    Object.defineProperty(window.navigator, 'platform', {value: 'Win64', configurable: true});
    document.dispatchEvent(new KeyboardEvent('keydown',{'key':'=', ctrlKey: true}));
    expect(zoom).toBeCalledWith(5);
});
test("Editor is NOT zoomed in on keydown = and cmd (platform = windows)", ()=>{
    Object.defineProperty(window.navigator, 'platform', {value: 'Win64', configurable: true});
    document.dispatchEvent(new KeyboardEvent('keydown',{'key':'=', metaKey: true}));
    expect(zoom).not.toBeCalled();
});
test("Editor is zoomed in on keydown = and cmd (platform = mac)", ()=>{
    Object.defineProperty(window.navigator, 'platform', {value: 'MacIntel', configurable: true});
    document.dispatchEvent(new KeyboardEvent('keydown',{'key':'+', metaKey: true}));
    expect(zoom).toBeCalledWith(5);
});
test("Editor is NOT zoomed in on keydown = and ctrl (platform = mac)", ()=>{
    Object.defineProperty(window.navigator, 'platform', {value: 'MacIntel', configurable: true});
    document.dispatchEvent(new KeyboardEvent('keydown',{'key':'+', ctrlKey: true}));
    expect(zoom).not.toBeCalled();
});
test("Editor is zoomed out on keydown - and ctrl", ()=>{
    Object.defineProperty(window.navigator, 'platform', {value: 'Win64', configurable: true});
    document.dispatchEvent(new KeyboardEvent('keydown',{'key':'-', ctrlKey: true}));
    expect(zoom).toBeCalledWith(-5);
});
test("Editor is NOT zoomed out on ONLY keydown -", ()=>{
    document.dispatchEvent(new KeyboardEvent('keydown',{'key':'-'}));
    expect(zoom).not.toBeCalled();
});
test("Editor is NOT zoomed in on ONLY keydown +", ()=>{
    document.dispatchEvent(new KeyboardEvent('keydown',{'key':'='}));
    expect(zoom).not.toBeCalled();
});