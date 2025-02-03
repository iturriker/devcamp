/* CONFIGURAR LA INTERFAZ */
// Definir el apartado actual
const headlands = document.querySelectorAll(".wrapper-links ul li a");
headlands.forEach(link => {
    if (location.href === link.href)
        {link.classList.add("expose");}
});