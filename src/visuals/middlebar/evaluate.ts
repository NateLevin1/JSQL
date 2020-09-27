import visualConsole from "../log/console";
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
        const curDate = new Date();
        visualConsole.logF("runlog", `[${curDate.getHours()}:${curDate.getMinutes()}:${curDate.getSeconds()}] Running...`);

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