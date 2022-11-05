import { valida } from "./valida.js";

const inputs = document.querySelectorAll("[data-tipo]");
const submit = document.querySelector(".contato__botao");

submit.addEventListener("click", (evento) => {
  evento.preventDefault();
  inputs.forEach((input) => {
    valida(input);
  });
});

inputs.forEach((input) => {
  input.addEventListener("blur", (evento) => {
    valida(evento.target);
  });
});
