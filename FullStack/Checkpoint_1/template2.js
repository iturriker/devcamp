/* CONFIGURAR LA INTERFAZ */
// Definir el apartado actual
const proposal = document.querySelector(".proposal");
const quiz = document.querySelector(".quiz");
if (location.href.includes("proposal"))
    {proposal.classList.add("highlight");}
if (location.href.includes("quiz"))
    {quiz.classList.add("highlight");}