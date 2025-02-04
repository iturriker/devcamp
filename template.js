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
    "Checkpoint_1": [
        { path: path, dir: "FullStack/Checkpoint_1/", file: "grid", type: ".html", desc: "Grid", target: "" },
        { path: path, dir: "FullStack/Checkpoint_1/", file: "quiz", type: ".html", desc: "Quiz", target: "" },
        { path: gitPath, dir: "FullStack/Checkpoint_1/", file: "", type: "", desc: "GitHub", target: "_blank" },
        { path: path, dir: "", file: "", type: "", desc: "Projects", target: "" },
    ],
    "Checkpoint_2": [
        { path: path, dir: "FullStack/Checkpoint_2/", file: "flexbox", type: ".html", desc: "FlexBox", target: "" },
        { path: path, dir: "FullStack/Checkpoint_2/", file: "ui_ux", type: ".html", desc: "UI/UX", target: "" },
        { path: path, dir: "FullStack/Checkpoint_2/", file: "quiz", type: ".html", desc: "Quiz", target: "" },
        { path: gitPath, dir: "FullStack/Checkpoint_2/", file: "", type: "", desc: "GitHub", target: "_blank" },
        { path: path, dir: "", file: "", type: "", desc: "Projects", target: "" },
    ]
};

/* OBTENER INFORMACION DE LOS CHECKPOINTS */
const checkpoints = Object.keys(structure); //Lista de checkpoints
const checkpointKey = checkpoints.find(checkpoint => window.location.pathname.includes(checkpoint)); //Checkpoint actual
const checkpointKeyIndex = checkpoints.indexOf(checkpointKey); //Indice del checkpoint actual

/* CONSTRUIR LOS LINKS DE HEADLAND Y MENU*/
if (checkpointKey && menuLinks && headlandList) {
    structure[checkpointKey].forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.path + link.dir + link.file + link.type;
        a.target = link.target;
        a.textContent = link.desc;
        li.appendChild(a);

        menuLinks.appendChild(li); // Agregar el <li> al menuLinks
        headlandList.appendChild(li.cloneNode(true)); // Clonar el <li> y agregarlo al headlandList
    });
}

/* CONSTRUIR LA INTERFAZ DEL MENU DE NAVEGACION*/
if(navigationList) {
    checkpoints.forEach(key => {

        const li = document.createElement('li');
        const a = document.createElement('a');
    
        a.href = structure[key][0].path + structure[key][0].dir + structure[key][0].file + structure[key][0].type;
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