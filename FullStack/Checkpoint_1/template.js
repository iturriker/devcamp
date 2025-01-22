/* CONSTRUIR LA BASE DE DATOS */
const path = "https://github.com/iturriker/devcamp/blob/main/FullStack/";

const data = [
  {name: "Checkpoint_1", number: 1, href: path + "Checkpoint_1/index.html"},
  {name: "Checkpoint_2", number: 2, href: path + "Checkpoint_2/index.html"},
  {name: "Checkpoint_3", number: 3, href: path + "Checkpoint_3/index.html"}
];

/* CONSTRUIR LA INTERFAZ */
// Generar la lista de checkpoints dinámicamente
const checkpointList = document.querySelector(".checkpoint-list");
data.forEach((checkpoint, index) => {

    const li = document.createElement('li');

    const a = document.createElement('a');
    a.href = checkpoint.href;
    a.textContent = index + 1;
    a.classList.add('checkpoint');

    li.appendChild(a);
    checkpointList.appendChild(li);
});

// Generar botones de navegación dinámicamente
const back = document.createElement('a');
back.textContent = 'back';
back.classList.add('back', 'link');

const next = document.createElement('a');
next.textContent = 'next';
next.classList.add('next', 'link');

document.querySelector('header').appendChild(back);
document.querySelector('header').appendChild(next);

/* CONFIGURAR LA INTERACCION */
// Manejar la entrada del mouse
function handleCheckpointListEnter(event) {
    checkpointList.querySelectorAll(".checkpoint").forEach(checkpoint => checkpoint.classList.remove("collapse"));
}

// Manejar la salida del mouse
function handleCheckpointListExit(event) {
    displayCheckpoint();
}

/* CONFIGURAR LA INTERFAZ */
// Definir el checkpoint actual
let checkpointIndex;
for (i=0; i<data.length; i++)
{
    if (location.href.includes(data[i].name))
        {checkpointIndex = i;}
}

// Mostrar u ocultar los checkpoints
function displayCheckpoint() {
    checkpointList.querySelectorAll(".checkpoint").forEach((checkpoint, index) => {
        if (index === checkpointIndex)
        {checkpoint.classList.remove("collapse");}
        else
        {checkpoint.classList.add("collapse");}
    });
}

// Definir las rutas de navegación y mostrar u ocultar los botones
function displayNavigation() {
    if (data[checkpointIndex] == data[0])
    {back.classList.add("collapse");}
    else
    {
        back.classList.remove("collapse");
        back.setAttribute('href', data[checkpointIndex-1].href);
    }

    if (data[checkpointIndex] == data[data.length - 1])
    {next.classList.add("collapse");}
    else
    {
        next.classList.remove("collapse");
        next.setAttribute('href', data[checkpointIndex+1].href);
    }
}

checkpointList.addEventListener("mouseenter", handleCheckpointListEnter);
checkpointList.addEventListener("mouseleave", handleCheckpointListExit);
displayNavigation();
displayCheckpoint();