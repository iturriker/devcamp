const themeToggleButton = document.createElement("a");
themeToggleButton.classList.add("theme-toggle-button");
document.body.appendChild(themeToggleButton);
themeToggleButton.textContent = "Toggle Theme";

// Función para aplicar el tema desde localStorage
function applyTheme(theme) {
    if (theme === "dark") {
        document.documentElement.style.setProperty("--grey-1", "black");
    } else {
        document.documentElement.style.setProperty("--grey-1", "white");
    }
}

// Función para alternar el tema
function toggleTheme() {

    if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light");
        applyTheme("light");
    }
    else {
        localStorage.setItem("theme", "dark");
        applyTheme("dark");
    }
}

themeToggleButton.addEventListener("click", toggleTheme);

// Recuperar el tema desde localStorage al cargar la página
if (localStorage.getItem("theme") === "dark") {
    applyTheme("dark");
}
else {
    applyTheme("light");
}