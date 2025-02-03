const publicBase = "https://iturriker.github.io/devcamp/";
const localBase = "http://127.0.0.1:5500/";
const links = document.querySelectorAll("a");
const rootStyle = getComputedStyle(document.documentElement);
let isLocal = location.origin === "http://127.0.0.1:5500";

/* CREAR Y AÑADIR EL LINKSTOLOCAL SOLO CUANDO ESTAMOS EN LOCAL*/
if (isLocal) {
    
    // Crear y añadir linkstolocal
    const linksToLocal = document.createElement("a");
    linksToLocal.classList.add("links-to-local");
    document.body.appendChild(linksToLocal);

    // Función para alternar los enlaces
    function toggleLinks() {
        links.forEach(link => {
            if (link.href.startsWith(publicBase)) {
                link.href = link.href.replace(publicBase, localBase);
            } else if (link.href.startsWith(localBase)) {
                link.href = link.href.replace(localBase, publicBase);
            }
        });
    }

    // Función para actualizar el botón
    function updateLinksToLocal() {
        linksToLocal.textContent = isLocal ? "Local Links" : "Public Links";
        linksToLocal.style.background = isLocal 
            ? rootStyle.getPropertyValue("--green-2") 
            : rootStyle.getPropertyValue("--blue-2");
    }

    // Inicializa el estado de los enlaces
    toggleLinks();
    updateLinksToLocal();

    // Evento de toggle al hacer clic en el botón
    linksToLocal.addEventListener("click", () => {
        isLocal = !isLocal;
        toggleLinks();
        updateLinksToLocal();
    });
}