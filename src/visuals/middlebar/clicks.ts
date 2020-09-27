import editor from "../monaco/setupMonaco";
import evaluate from "./evaluate";
import clear from "./clear";

document.getElementById("run").onclick = ()=>{
    evaluate(editor.getValue());
}
document.getElementById("clear").onclick = clear;