import visualConsole from "../log/console";
import { Table as ImportedTable, Database as ImportedDatabase } from "../../lib/loader";
const evaluate = (content: string)=>{ // async so eval is async
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
    const curDate = new Date();
    visualConsole.logF("runlog", `[${curDate.getHours()}:${curDate.getMinutes()}:${curDate.getSeconds()}] Running...`);
    const reset = ()=>{
        // reset to correct values
        console.log = oldLog;
        console.warn = oldWarn;
        console.error = oldError;
    }
    try {
        // webpack & eval works very weird so this is how we do it
        var Table = ImportedTable;
        var Database = ImportedDatabase;
        return eval(`(async () => {${content}\n})()`).catch((e:any)=>{visualConsole.error(e);console.error(e);}).finally(()=>{reset();});
    } catch(e) {
        visualConsole.error(e);
        console.error(e);
        reset();
    }
}

export default evaluate;