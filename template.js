/* OBTENER LOS ELEMENTOS */
const menu = document.querySelector(".menu");
const menuWrapper = document.querySelector(".menu-wrapper");
const menuLinks = document.querySelector(".menu-links");
const navigation = document.querySelector(".navigation");
const navigationWrapper = document.querySelector(".navigation-wrapper");
const navigationList = document.querySelector(".navigation-list");
const filterSlider = document.querySelector(".filter-slider");
const linksPathChanger = document.querySelector(".links-path-changer");
const headlandList = document.querySelector(".headland-list");
const backControl = document.querySelector(".back-control");
const nextControl = document.querySelector(".next-control");
const rootStyle = getComputedStyle(document.documentElement);

/* DIRECCIONES DE LOS ARCHIVOS */
const path = "https://iturriker.github.io/devcamp/";
const gitPath = "https://github.com/iturriker/devcamp/blob/main/";
const localPath = "http://127.0.0.1:5500/";

/* BASE DE DATOS */
const structure = {
    "index": [
        { path: path, dir: "", file: "style-guide", type: ".html", desc: "Style Guide", target: "", rel: ""},
        { path: gitPath, dir: "", file: "README", type: ".md", desc: "README", target: "_blank", rel: "noopener noreferrer" },
        { path: gitPath, dir: "", file: "", type: "", desc: "GitHub", target: "_blank", rel: "noopener noreferrer" },
        { path: "https://iturriker.github.io/portfolio/", dir: "", file: "", type: "", desc: "Iker Karkokli", target: "_blank", rel: "noopener noreferrer" },
    ],
    "style-guide": [
        { path: gitPath, dir: "", file: "style-guide", type: ".html", desc: "GitHub", target: "_blank", rel: "noopener noreferrer" },
        { path: path, dir: "", file: "index", type: ".html", desc: "Projects", target: "", rel: "" },
    ],
    "checkpoint-1": [
        { path: path, dir: "full-stack/checkpoint-1/", file: "grid", type: ".html", desc: "Grid", target: "", rel: "" },
        { path: path, dir: "full-stack/checkpoint-1/", file: "quiz", type: ".html", desc: "Quiz", target: "", rel: "" },
        { path: gitPath, dir: "full-stack/checkpoint-1/", file: "", type: "", desc: "GitHub", target: "_blank", rel: "noopener noreferrer" },
        { path: path, dir: "", file: "index", type: ".html", desc: "Projects", target: "", rel: "" },
    ],
    "checkpoint-2": [
        { path: path, dir: "full-stack/checkpoint-2/", file: "flexbox", type: ".html", desc: "FlexBox", target: "", rel: "" },
        { path: path, dir: "full-stack/checkpoint-2/", file: "ui-ux", type: ".html", desc: "UI/UX", target: "", rel: "" },
        { path: path, dir: "full-stack/checkpoint-2/", file: "quiz", type: ".html", desc: "Quiz", target: "", rel: "" },
        { path: gitPath, dir: "full-stack/checkpoint-2/", file: "", type: "", desc: "GitHub", target: "_blank", rel: "noopener noreferrer" },
        { path: path, dir: "", file: "index", type: ".html", desc: "Projects", target: "", rel: "" },
    ]
};

/* OBTENER INFORMACION DE LAS CLAVES */
const keys = Object.keys(structure); // Lista de todas las claves
const keysToIgnore = ["index", "style-guide"]; // Claves a ignorar
let currentKey;
if (window.location.href === path || window.location.href === localPath) {
    currentKey = "index"; // Si estamos en la página principal, asignamos "index"
}
else {
    currentKey = keys.find(key => window.location.pathname.includes(key)); // Buscamos la clave actual en la URL
}

/* OBTENER INFORMACION DE LOS CHECKPOINTS */
const checkpoints = keys.filter(key => !keysToIgnore.includes(key)); // Lista de checkpoints sin las claves a ignorar
const checkpointKeyIndex = checkpoints?.indexOf(currentKey); // Indice del checkpoint actual




/* CONSTRUIR LOS LINKS DE HEADLAND Y MENU*/
if (currentKey && menuLinks) {
    structure[currentKey].forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.path + link.dir + link.file + link.type;
        a.target = link.target;
        a.rel = link.rel;
        a.textContent = link.desc;
        li.appendChild(a);

        menuLinks.appendChild(li); // Agregar el <li> al menuLinks
        headlandList?.appendChild(li.cloneNode(true)); // Clonar el <li> y agregarlo al headlandList
    });
}

/* CONSTRUIR LA INTERFAZ DEL MENU DE NAVEGACION*/
if(navigationList) {
    checkpoints.forEach(key => {
        const li = document.createElement('li');
        const a = document.createElement('a');
    
        a.href = structure[key][0].path + structure[key][0].dir + structure[key][0].file + structure[key][0].type;
        a.target = structure[key][0].target;
        a.rel = structure[key][0].rel;
        a.textContent = structure[key][0].desc;
    
        li.appendChild(a);
        navigationList.appendChild(li);
    });
}

/* CONSTRUIR LOS BOTONES DE NAVEGACION */
if (backControl && nextControl) {
    if (checkpointKeyIndex === 0) {
        backControl.classList.add("collapse");
    }
    else {
        backControl.classList.remove("collapse");
        const prevItem = structure[checkpoints[checkpointKeyIndex - 1]][0];
        backControl.href = prevItem.path + prevItem.dir + prevItem.file + prevItem.type;
    }
    
    if (checkpointKeyIndex === checkpoints.length - 1) {
        nextControl.classList.add("collapse");
    }
    else {
        nextControl.classList.remove("collapse");
        const nextItem = structure[checkpoints[checkpointKeyIndex + 1]][0];
        nextControl.href = nextItem.path + nextItem.dir + nextItem.file + nextItem.type;
    }
}

/* THEME SLIDER */
if(filterSlider) {
    filterSlider.value = localStorage.getItem("theme-slider-value") || 0;
    document.documentElement.style.filter = `hue-rotate(${filterSlider.value}deg)`;
    
    filterSlider.addEventListener("input", function() {
        document.documentElement.style.filter = `hue-rotate(${filterSlider.value}deg)`;
        localStorage.setItem("theme-slider-value", filterSlider.value);
    });
}

/* LINKS PATH CHANGER */
if (location.origin === "http://127.0.0.1:5500" && linksPathChanger) {
    if (!localStorage.getItem("links-path")) {
        localStorage.setItem("links-path", "local");
    }

    function toggleLinksPath() {
        const links = document.querySelectorAll("a");
        links.forEach(link => {
            if (link.href.startsWith(path) && localStorage.getItem("links-path") === "local") {
                link.href = link.href.replace(path, localPath);
            } else if (link.href.startsWith(localPath) && localStorage.getItem("links-path") === "public") {
                link.href = link.href.replace(localPath, path);
            }
        });
    }

    function updateLinksPath() {
        linksPathChanger.textContent = localStorage.getItem("links-path") === "local" ? "Local Links" : "Public Links";
        linksPathChanger.style.background = localStorage.getItem("links-path") === "local"
            ? rootStyle.getPropertyValue("--green-2")
            : rootStyle.getPropertyValue("--blue-2");
    }

    // Configurar el MutationObserver para detectar cambios en el DOM y actualizar los enlaces
    const observer = new MutationObserver(() => {
        toggleLinksPath();
    });

    // Configuración del observer para observar cambios en el DOM de toda la página
    observer.observe(document.body, {
        childList: true,        // Observar adiciones y eliminaciones de nodos
        subtree: true           // Observar todo el árbol de elementos hijos
    });

    toggleLinksPath();
    updateLinksPath();

    linksPathChanger.addEventListener("click", () => {
        localStorage.setItem("links-path", localStorage.getItem("links-path") === "local" ? "public" : "local");
        toggleLinksPath();
        updateLinksPath();
    });
}

/* EXPONER LOS CHECKPOINTS DE NAVEGACION */
navigationList?.querySelectorAll("li a").forEach((cp, index) => {cp.classList.toggle("expose", index === checkpointKeyIndex);});

/* EXPONER LOS HEADLANDS DE NAVEGACION */
headlandList?.querySelectorAll("li a").forEach(link => link.classList.toggle("expose", location.href === link.href));

/* CONFIGURAR LA INTERACCION DE OCULTACION */
function toggleCollapse(element, state) {
    element?.classList.toggle("collapse", state);
}

function handleMouseEnter(evt) {
    toggleCollapse(evt.target.children[0], false); // Acceder al wrapper y ocultarlo
}

function handleMouseLeave(evt) {
    if (document.documentElement.scrollTop !== 0) {
        toggleCollapse(evt.target.children[0], true); // Acceder al wrapper y mostrarlo
    }
}

function handleScroll() {
    const state = document.documentElement.scrollTop !== 0;
    toggleCollapse(navigationWrapper, state);
    toggleCollapse(menuWrapper, state);
}

/* EVENTOS */
navigation?.addEventListener("mouseenter", handleMouseEnter);
navigation?.addEventListener("mouseleave", handleMouseLeave);
menu?.addEventListener("mouseenter", handleMouseEnter);
menu?.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("scroll", handleScroll);