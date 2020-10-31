import * as monaco from 'monaco-editor';
document.body.innerHTML = `
    <input id="highlighting" type="checkbox">
    `;
const checkFromStorage = require("./highlighting").default;

test("works properly as undefined", ()=>{
    window.localStorage.__proto__.getItem = jest.fn((name)=>{ return undefined; });
    expect(checkFromStorage()).toBe(true);
    expect(localStorage.getItem).toBeCalledWith("sql-highlighting");
});

test("works properly as a value", ()=>{
    window.localStorage.__proto__.getItem = jest.fn((name)=>{ return "false"; });
    expect(checkFromStorage()).toBe(false);
    expect(localStorage.getItem).toBeCalledWith("sql-highlighting");
});

describe("clicking", ()=>{
    monaco.editor.setTheme = jest.fn((theme) => { });
    monaco.editor.setModelLanguage = jest.fn((model, langID) => { });

    test("sets theme properly if isChecked is true", ()=>{
        const highlighting = document.getElementById("highlighting") as HTMLInputElement;
        highlighting.checked = true;
        highlighting.click();
        expect(monaco.editor.setTheme).toBeCalledWith("vs-dark");
        expect(monaco.editor.setModelLanguage).toBeCalledWith({}, "javascript"); // {} is returned from getModel() in the mock
    });
    test("sets theme properly if isChecked is false", ()=>{
        const highlighting = document.getElementById("highlighting") as HTMLInputElement;
        highlighting.checked = false;
        highlighting.click();
        expect(monaco.editor.setTheme).toBeCalledWith("jsql-theme");
        expect(monaco.editor.setModelLanguage).toBeCalledWith({}, "jsql"); // {} is returned from getModel() in the mock
    });
});