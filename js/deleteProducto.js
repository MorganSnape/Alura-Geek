import { conexionAPI } from "./conexionAPI.js"

const buttonDelete = document.querySelector(".button__delete")

async function deleteCard(){
  conexionAPI.listarProductos
}

buttonDelete.addEventListener("click", deleteCard())
// que debo hacer ? 

// camturar la lista 
// identificar que al hacer click en boton delete capte el identificar
//con el id borrar del archivo json todo el objeto 