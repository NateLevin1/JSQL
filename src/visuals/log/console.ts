import "./console.css";
import append from "./append";
const visualConsole = {
    logF: append, // the same as log, but with a custom class
    log: (...args: any[])=>{
        append("log", `⠿ `, ...args);
    },
    error: (...args: any[])=>{
        append("error", ...args);
    },
    warn: (...args: any[])=>{
        append("warn", ...args);
    }
}
export default visualConsole;