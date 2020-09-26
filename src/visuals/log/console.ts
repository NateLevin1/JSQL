import "./console.css";
const log = document.getElementById("output");
const append = (className: string, ...args: any[])=>{
    args = args.map((arg)=>arg.toString());
    const node = document.createElement("p");
    node.textContent = args.join("");
    node.classList.add(className);
    log.appendChild(node);
}
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