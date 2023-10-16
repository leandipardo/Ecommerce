const d = document;

export default function home() {
  let res;
  let json;
  const $main = d.querySelector("main");
  const success = (json) => {
    console.log(json);
    const Arr = json;
    Arr.forEach((el) => {
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
      $main.appendChild($div);
    });
  };

  const error = (x) => {
    console.log("falle papa");
  };

  const getProductos = async () => {
    try {
      res = await fetch("http://localhost:5550/camperas");
      json = await res.json();
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      success(json);
    } catch (err) {
      error(err);
    }
  };
  getProductos();
}

d.addEventListener("click", (e) => {
  if (e.target.matches(".imagen-producto")) {
    e.target.classList.add("activo");
  }
});
