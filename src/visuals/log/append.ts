import createDetails from "./createDetails";
const log = document.getElementById("output");
const append = (className: string, ...args: any[])=>{
    const container = document.createElement("p");
    args.forEach((arg)=>{
        if(typeof arg !== "object") {
            const node = document.createElement("span");
            node.classList.add(className);
            node.textContent = arg;
            container.appendChild(node);
            return null;
        }

        // arrays and objects
        createDetails(arg, container, log);
    });
    log.appendChild(container);
    log.scrollTop = log.scrollHeight;
}
export default append;