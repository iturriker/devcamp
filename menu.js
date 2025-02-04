/* CONSTRUIR EL MENU */
const menu = document.createElement("ul");
menu.classList.add("menu");
menu.id = "menu";
document.body.appendChild(menu);



/* CONSTRUIR LA BASE DE DATOS */
const upPath = "https://iturriker.github.io/devcamp/FullStack/";
const gitPath = "https://github.com/iturriker/devcamp/blob/main/FullStack/";

const menuData = [
  {path: upPath, dir: "Checkpoint_1/", file: "grid", type:".html", desc:"Grid"},
  {path: upPath, dir: "Checkpoint_1/", file: "quiz", type:".html", desc:"Quiz"},
  {path: gitPath, dir: "Checkpoint_1/", file: "", type:"", desc:"GitHub"},
];

// Definir el href de cada link
menuData.forEach(link => {
    link.href = link.path + link.dir + link.file + link.type;
});
  

/* CONSTRUIR LA INTERFAZ */
// Generar la lista de links dinámicamente
menuData.forEach((link, index) => {

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.desc;
    a.classList.add('menu-link');

    li.appendChild(a);
    menu.appendChild(li);
});