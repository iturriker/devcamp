/* CONSTRUIR EL CONFIG */
const config = document.createElement("div");
config.classList.add("config");
config.id = "config";
document.body.appendChild(config);



/* CREAR EL THEMESLIDER */
const themeSlider = document.createElement("input");
themeSlider.classList.add("theme-slider");
config.appendChild(themeSlider);

themeSlider.type = "range";
themeSlider.min = "0";
themeSlider.max = "360";
themeSlider.value = localStorage.getItem("theme-slider-value");

// Actualizar el themeSlider
themeSlider.addEventListener("input", function() {
    document.documentElement.style.filter = `hue-rotate(${themeSlider.value}deg)`;
    localStorage.setItem("theme-slider-value", themeSlider.value);
});

// Inicializar el themeSlider
document.documentElement.style.filter = `hue-rotate(${localStorage.getItem("theme-slider-value")}deg)`;



/* CREAR EL LINKSPATH */
const publicBase = "https://iturriker.github.io/devcamp/";
const localBase = "http://127.0.0.1:5500/";
const links = document.querySelectorAll("a");
const rootStyle = getComputedStyle(document.documentElement);
let isLocal = location.origin === "http://127.0.0.1:5500";

// Activarlo solo cuando estemos en local
if (isLocal) {
    
    // Crear y añadir linksPath
    const linksPath = document.createElement("a");
    linksPath.classList.add("links-path");
    config.appendChild(linksPath);

    // Función para alternar los enlaces
    function toggleLinksPath() {
        links.forEach(link => {
            if (link.href.startsWith(publicBase)) {
                link.href = link.href.replace(publicBase, localBase);
            } else if (link.href.startsWith(localBase)) {
                link.href = link.href.replace(localBase, publicBase);
            }
        });
    }

    // Función para actualizar el linksPath
    function updateLinksPath() {
        linksPath.textContent = isLocal ? "Local Links" : "Public Links";
        linksPath.style.background = isLocal 
            ? rootStyle.getPropertyValue("--green-2") 
            : rootStyle.getPropertyValue("--blue-2");
    }

    // Inicializa el estado de los enlaces
    toggleLinksPath();
    updateLinksPath();

    // Evento de toggle al hacer clic en el linksPath
    linksPath.addEventListener("click", () => {
        isLocal = !isLocal;
        toggleLinksPath();
        updateLinksPath();
    });
}