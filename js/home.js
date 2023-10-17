import categorias from "./categorias.js";

const d = document;

export default function home() {
  let res;
  let json;
  const $main = d.querySelector("main"),
    $section = d.createElement("section");
  $section.classList.add("seccion-productos");
  const success = (json) => {
    json.forEach((el) => {
      const $div = d.createElement("div");
      $div.classList.add("contenedor-productos");
      $div.innerHTML = `
      <h2>${el.nombre}</h2>
      <img
      src=${el.foto1} 
      data-tipo="${el.tipo}" 
      data-id="${el.id}"
      class="imagen-producto"
      alt="${el.tipo + el.id}"
      >
      <h3>${el.descripcion}</h3>
      <h3>$${el.precio}</h3>

      `;
      $section.appendChild($div);
    });
    $main.appendChild($section);
  };

  const error = (x) => {
    $main.innerHTML = `Lo siento, no fue posible cargar el elemento: ${x.status} : ${x.statusText}`;
  };

  const getProductos = async (categoria) => {
    try {
      res = await fetch(`http://localhost:5550/${categoria}`);
      json = await res.json();
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      success(json);
    } catch (err) {
      error(err);
    }
  };
  categorias($main);
  getProductos("camperas");
  getProductos("pantalones");
  getProductos("zapatillas");
}

d.addEventListener("click", (e) => {
  if (e.target.matches(".imagen-producto")) {
    e.target.classList.toggle("activo");
  }
});
