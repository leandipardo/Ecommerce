const d = document,
  $header = d.querySelector("header"),
  nombre = "Adidas INK",
  menus = ["Inicio", "Productos", "Nosotros", "Contacto"];

export default function header() {
  const $logoContenedor = d.createElement("div"),
    $nav = d.createElement("nav"),
    $search = d.createElement("input"),
    $logo = d.createElement("p"),
    $ul = d.createElement("ul"),
    $li = d.createElement("li"),
    $a = d.createElement("a"),
    $fragment = d.createDocumentFragment();

  $nav.classList.add("navbar");

  $logoContenedor.classList.add("nav-logo-contenedor");
  $logo.classList.add("nav-logo");
  $logo.innerText = `${nombre}`;
  $logoContenedor.appendChild($logo);

  menus.forEach((el) => {
    $a.innerHTML = `<p>${el}</p>`;
    $a.setAttribute("href", el);
    $li.insertAdjacentElement("beforeend", $a);
    let $clone = $li.cloneNode($li, true);
    $ul.appendChild($clone);
  });

  $search.setAttribute("type", "input");
  $search.classList.add("nav-search");
  $search.setAttribute("name", "nav-busqueda");
  $search.setAttribute("placeholder", "Buscar Articulo");

  $nav.appendChild($logoContenedor);
  $nav.appendChild($search);
  $nav.appendChild($ul);
  $fragment.appendChild($nav);

  $header.appendChild($fragment);
}
