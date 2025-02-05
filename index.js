const itemList = document.querySelector(".item-list");

/* ITERA SOBRE LOS CHECKPOINTS Y CONSTRUYE LA ESTRUCTURA */
checkpoints.forEach(checkpoint => {
    const h3 = document.createElement("h3");
    h3.textContent = checkpoint;
    const ul = document.createElement("ul");

    // Iterar sobre los elementos del checkpoint
    structure[checkpoint].forEach(link => {
        // Evitamos meter el link a index
        if (link.file !== "index") {
            const li = document.createElement("li");
            const a = document.createElement("a");
    
            a.href = link.path + link.dir + link.file + link.type;
            a.textContent = link.desc;
            a.target = link.target;
            a.rel = link.rel;
    
            a.classList.add("highlight");
    
            li.appendChild(a);
            ul.appendChild(li);
        }
    });

    itemList.appendChild(h3);
    itemList.appendChild(ul);
});