import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard({ titulo, id, precio, imagen }) {
  const producto = document.createElement("article"); //defino que etiqueta ira dentro del data-lita
  producto.className = "producto__card"; // le asignamos clase
  producto.id = "producto-" + id;
  // producto.dataset.set('producto')
  producto.innerHTML = `<img
              class="producto__img"
              src=${imagen}
              alt="Soy un producto"
            />
            <h3 class="producto__title">${titulo}</h3>
            <div class="producto__details">
              <p>$ ${precio}</p>
              <button id="producto-btn-${id}" class="button button__delete" type="button" title="Borrar">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 4.00022H14V2.33022C13.9765 1.69004 13.7002 1.08528 13.2316 0.648511C12.7629 0.211745 12.1402 -0.0213881 11.5 0.000218771H8.5C7.85976 -0.0213881 7.23706 0.211745 6.76843 0.648511C6.2998 1.08528 6.02346 1.69004 6 2.33022V4.00022H1C0.734784 4.00022 0.48043 4.10558 0.292893 4.29311C0.105357 4.48065 0 4.735 0 5.00022C0 5.26544 0.105357 5.51979 0.292893 5.70733C0.48043 5.89486 0.734784 6.00022 1 6.00022H2V17.0002C2 17.7959 2.31607 18.5589 2.87868 19.1215C3.44129 19.6842 4.20435 20.0002 5 20.0002H15C15.7957 20.0002 16.5587 19.6842 17.1213 19.1215C17.6839 18.5589 18 17.7959 18 17.0002V6.00022H19C19.2652 6.00022 19.5196 5.89486 19.7071 5.70733C19.8946 5.51979 20 5.26544 20 5.00022C20 4.735 19.8946 4.48065 19.7071 4.29311C19.5196 4.10558 19.2652 4.00022 19 4.00022ZM8 14.0002C8 14.2654 7.89464 14.5198 7.70711 14.7073C7.51957 14.8949 7.26522 15.0002 7 15.0002C6.73479 15.0002 6.48043 14.8949 6.29289 14.7073C6.10536 14.5198 6 14.2654 6 14.0002V10.0002C6 9.735 6.10536 9.48065 6.29289 9.29311C6.48043 9.10558 6.73479 9.00022 7 9.00022C7.26522 9.00022 7.51957 9.10558 7.70711 9.29311C7.89464 9.48065 8 9.735 8 10.0002V14.0002ZM8 2.33022C8 2.17022 8.21 2.00022 8.5 2.00022H11.5C11.79 2.00022 12 2.17022 12 2.33022V4.00022H8V2.33022ZM14 14.0002C14 14.2654 13.8946 14.5198 13.7071 14.7073C13.5196 14.8949 13.2652 15.0002 13 15.0002C12.7348 15.0002 12.4804 14.8949 12.2929 14.7073C12.1054 14.5198 12 14.2654 12 14.0002V10.0002C12 9.735 12.1054 9.48065 12.2929 9.29311C12.4804 9.10558 12.7348 9.00022 13 9.00022C13.2652 9.00022 13.5196 9.10558 13.7071 9.29311C13.8946 9.48065 14 9.735 14 10.0002V14.0002Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>`; // le decimos lo que va dentro del article

  const btn = producto.querySelector('button');

  btn.addEventListener("click", () => eliminarProducto(id));
  return producto;
}

async function eliminarProducto(id) {
  console.log("Eliminando producto con id:", id)
  await conexionAPI.deleteProducto(id)
  console.log("Eliminando producto con id:", id)
}

async function listarProductos() {
  const listaAPI = await conexionAPI.listarProductos();

  listaAPI.forEach((data) => {
    const tarjeta = crearCard(data);

    lista.appendChild(tarjeta);
  });
}

listarProductos();
