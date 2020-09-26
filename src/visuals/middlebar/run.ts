import visualConsole from "../log/console";
import editor from "../monaco/setupMonaco";
import "./run.css";

document.getElementById("run").onclick = ()=>{
    evaluate(editor.getValue());
}

const evaluate = (content: string)=>{
    try {
        // substitute console methods so that it will show up on both the actual console and the visual console
        const oldLog = console.log;
        const oldWarn = console.warn;
        const oldError = console.error;
        console.log = (...args: any[])=>{
            oldLog(...args);
            visualConsole.log(...args);
        }
        console.warn = (...args: any[])=>{
            oldWarn(...args);
            visualConsole.warn(...args);
        }
        console.error = (...args: any[])=>{
            oldLog("ERROR: ", ...args);
            visualConsole.error(...args);
        }

        visualConsole.logF("runlog", "Running...");

        eval(content);

        // reset to correct values
        console.log = oldLog;
        console.warn = oldWarn;
        console.error = oldError;
    } catch(e) {
        visualConsole.error(e);
    }
}

export default evaluate;