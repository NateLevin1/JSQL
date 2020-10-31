import * as monaco from 'monaco-editor';
import editor from '../monaco/setupMonaco';
const highlighting: HTMLInputElement = document.getElementById("highlighting") as HTMLInputElement;

checkFromStorage();

highlighting.onclick = ()=>{
    const isChecked = highlighting.checked;
    setTheme(isChecked);
    localStorage.setItem("sql-highlighting", (isChecked).toString());
}

function setTheme(isChecked: boolean) {
    if (isChecked) {
        monaco.editor.setTheme("jsql-theme");
        monaco.editor.setModelLanguage(editor.getModel(), "jsql");
    } else {
        monaco.editor.setTheme("vs-dark");
        monaco.editor.setModelLanguage(editor.getModel(), "javascript");
    }
}

// set defaults
setTheme(highlighting.checked);

export default function checkFromStorage() {
    return highlighting.checked = (localStorage.getItem("sql-highlighting") ?? "true") === "true";
}

