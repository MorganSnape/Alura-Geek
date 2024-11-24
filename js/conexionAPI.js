const url = "https://67411644d0b59228b7f22fa7.mockapi.io/productos";

async function listarProductos() {
  const response = await fetch(url);
  const listadoProductos = await response.json();
  return listadoProductos;
}

async function enviarProducto(titulo, precio, imagen) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "aplication/json" },
    body: JSON.stringify({
      titulo: titulo,
      precio: +precio,
      imagen: imagen,
    }),
  });

  const nuevoProducto = await response.json();

  return nuevoProducto;
}

async function deleteProducto(id) {
  
  await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
}

//exportamos la funcion listarProductos para que pueda ser importada y usarse en otros archivos
export const conexionAPI = {
  listarProductos,
  enviarProducto,
  deleteProducto,
};
