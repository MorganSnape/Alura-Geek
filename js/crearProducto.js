import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
const btnRetroceder = document.querySelector("#retroceder")

async function crearProducto(evento) {
  evento.preventDefault();

  const titulo = document.querySelector("[data-titulo]").value;
  const precio = document.querySelector("[data-precio]").value;
  const imagen = document.querySelector("[data-imagen]").value;

  await conexionAPI.enviarProducto(titulo, precio, imagen);

  window.location.href = "../index.html";
}

formulario.addEventListener("submit", (evento) => crearProducto(evento));


// funcion para retroceder al incio de pagina
function retrocederInicio() {
   window.location.href = "../index.html";
}

btnRetroceder.addEventListener("click", () => retrocederInicio());
