const createDetails = (arg: any, container: HTMLElement, log: HTMLElement, depth: number):any=>{
    if(depth > 30) {
        // circular references
        const node = document.createElement("span");
        node.textContent = "Maximum object depth exceeded.";
        node.style.color = "red";
        container.appendChild(node);
        return null;
    }

    const detailContainer = document.createElement("details");
    detailContainer.classList.add("object-view");

    const objectName = document.createElement("summary");
    objectName.textContent = arg instanceof Array ? "Array ("+arg.length+")" : "Object";
    objectName.onclick = ()=>{
        setTimeout(()=>{
            log.scrollTop = objectName.getBoundingClientRect().top - log.getBoundingClientRect().top + log.scrollTop - 20;
        }, 5);
    }
    detailContainer.appendChild(objectName);
    for(const [key, val] of Object.entries(arg)) {
        const node = document.createElement("p");
        node.textContent = `${key}: `;

        const valSpan = document.createElement("span");
        if(typeof val !== "object" || val === null || val === undefined || (typeof arg === "object" && Object.keys(arg).length === 0)) {
            if(typeof val === "function") {
                valSpan.textContent = val.toString(); // show quotes etc
            } else if(val === undefined) {
                valSpan.textContent = "undefined"; // show quotes etc
            } else {
                valSpan.textContent = JSON.stringify(val); // show quotes etc
            }
        } else {
            // recurse
            createDetails(val, valSpan, log, depth+1);
        }
        
        valSpan.classList.add(typeof val);
        node.appendChild(valSpan);

        detailContainer.appendChild(node);
    }

    container.appendChild(detailContainer);
}
export default createDetails;