import editor from "./setupMonaco";
import * as monaco from 'monaco-editor';
const zoom = (amount: number)=>{
    editor.updateOptions({fontSize: editor.getOption(monaco.editor.EditorOption.fontSize) as number + amount});
}
export default zoom;