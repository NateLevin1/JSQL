import createDetails from "./createDetails";
const log = document.getElementById("output");
const append = (className: string, ...args: any[])=>{
    const container = document.createElement("p");
    container.classList.add(className);
    args.forEach((arg)=>{
        if(typeof arg !== "object" || arg === null || arg instanceof Error || (typeof arg === "object" && Object.keys(arg).length === 0)) { // typeof null is object for some reason, so this handles that
            const node = document.createElement("span");
            if(arg === null) {
                node.textContent = "null";
                node.style.color = "rebeccapurple";
            } else if(arg === undefined) {
                node.textContent = "undefined";
                node.style.color = "rebeccapurple";
            } else if(arg instanceof Error) {
                node.textContent = arg.toString();
            } else if(typeof arg === "object" && Object.keys(arg).length === 0) {
                node.textContent = "[empty object]: "+arg;
            } else {
                node.textContent = arg;
            }
            container.appendChild(node);
            return null;
        }

        // arrays and objects
        createDetails(arg, container, log, 0);
    });
    log.appendChild(container);
    log.scrollTop = log.scrollHeight;
}
export default append;