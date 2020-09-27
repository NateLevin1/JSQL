import editor from "../monaco/setupMonaco";
import "./run.css";
import evaluate from "./evaluate";

document.getElementById("run").onclick = ()=>{
    evaluate(editor.getValue());
}