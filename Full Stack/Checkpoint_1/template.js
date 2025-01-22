const checkpoints = [
  {name: "Checkpoint_1", href: "/Checkpoint_1/proposal.html"},
  {name: "Checkpoint_2", href: "/Checkpoint_2/proposal.html"},
  {name: "Checkpoint_3", href: "/Checkpoint_3/proposal.html"}
];

const checkpointList = document.querySelector(".checkpoint-list");

// Generar la lista de checkpoints dinámicamente
checkpoints.forEach((checkpoint, index) => {

    const li = document.createElement('li');

    const a = document.createElement('a');
    a.href = checkpoint.href;
    a.textContent = index + 1;
    a.classList.add('checkpoint');

    li.appendChild(a);
    checkpointList.appendChild(li);
});

const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let checkpointIndex;
let checkpoint;

// Manejar la entrada del mouse
function handleCheckpointListEnter(event) {
    checkpoints.forEach(checkpoint => checkpoint.classList.remove("collapse"));
}

// Manejar la salida del mouse
function handleCheckpointListExit(event) {
    displayCheckpoint();
}

// Manejar el clic en un checkpoint
function handleCheckpointClick(event) {
    event.preventDefault();
    const clickedCheckpointIndex = Array.from(checkpoints).indexOf(event.target);

    if (clickedCheckpointIndex !== -1) {
        checkpointIndex = clickedCheckpointIndex;
        displayNavigation();
        displayCheckpoint();
    }
}

// Manejar el clic en los botones de navegación
function handleNavigationClick(event) {
    event.preventDefault();

    if (event.target === next && checkpointIndex < checkpoints.length - 1)
    {checkpointIndex++;}
    else if (event.target === previous && checkpointIndex > 0)
    {checkpointIndex--;}
    checkpoint = checkpoints[checkpointIndex];

    displayNavigation();
    displayCheckpoint();
}

// Mostrar u ocultar los botones
function displayNavigation() {
    if (checkpoint == checkpoints[0])
    {previous.classList.add("collapse");}
    else
    {previous.classList.remove("collapse");}

    if (checkpoint == checkpoints[checkpoints.length - 1])
    {next.classList.add("collapse");}
    else
    {next.classList.remove("collapse");}
}

// Mostrar el checkpoint
function displayCheckpoint() {
    checkpointList.forEach((checkpoint, index) => {
        if (index === checkpointIndex)
        {checkpoint.classList.remove("collapse");}
        else
        {checkpoint.classList.add("collapse");}
    });
}

// Inicializar las cosas
function initialize() {
    checkpointList.addEventListener("mouseenter", handleCheckpointListEnter);
    checkpointList.addEventListener("mouseleave", handleCheckpointListExit);
    checkpoints.forEach(checkpoint => checkpoint.addEventListener("click", handleCheckpointClick));

    previous.addEventListener("click", handleNavigationClick);
    next.addEventListener("click", handleNavigationClick);
}

initialize();
displayNavigation();
displayCheckpoint();