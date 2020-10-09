const createDetails = (arg: any, container: HTMLElement, log: HTMLElement)=>{
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
        if(typeof val !== "object") {
            valSpan.textContent = JSON.stringify(val); // show quotes etc
        } else {
            // recurse
            createDetails(val, valSpan, log);
        }
        
        valSpan.classList.add(typeof val);
        node.appendChild(valSpan);

        detailContainer.appendChild(node);
    }

    container.appendChild(detailContainer);
}
export default createDetails;