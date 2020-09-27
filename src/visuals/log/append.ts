const log = document.getElementById("output");
const append = (className: string, ...args: any[])=>{
    args = args.map((arg)=>arg.toString());
    const node = document.createElement("p");
    node.textContent = args.join("");
    node.classList.add(className);
    log.appendChild(node);
}
export default append;