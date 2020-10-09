import * as monaco from 'monaco-editor';
import "./monaco.css";
import zoom from "./zoom";
const editor = monaco.editor.create(document.getElementById('monaco-container'), {
    value: [
      ""
    ].join('\n'),
    language: 'javascript',
    theme: "vs-dark",
    automaticLayout: true,
    fontSize: 16
});
document.onkeydown = (event)=>{
  const isCtrlDown = navigator.platform.toUpperCase().includes("MAC") ? event.metaKey : event.ctrlKey;
  if(isCtrlDown) {
    if(event.key == "=" || event.key == "+") {
      event.preventDefault();
      zoom(5);
    } else if(event.key == "-") {
      event.preventDefault();
      zoom(-5);
    }
  }
}
export default editor;