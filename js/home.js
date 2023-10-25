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
      <h3>${el.nombre}</h3>
      <img
      src=${el.foto1} 
      data-tipo="${el.tipo}" 
      data-id="${el.id}"
      class="imagen-producto"
      alt="${el.tipo + el.id}"
      >
      <h4>${el.descripcion}</h4>
      <h4>$${el.precio}</h4>

      `;
      switch (el.tipo) {
        case "campera":
          $div.dataset.tipo = "camperas";
          break;
        case "pantalon":
          $div.dataset.tipo = "pantalones";
          break;
        case "zapatilla":
          $div.dataset.tipo = "zapatillas";
          break;
        case "modelo":
          $div.dataset.tipo = "modelos";
          break;
        default:
          break;
      }
      $div.dataset.id = el.id;
      $section.appendChild($div);
    });
    $main.appendChild($section);
  };

  const error = (x) => {
    $main.innerHTML = `Lo siento, no fue posible cargar el elemento: ${x.status} : ${x.statusText}`;
  };
  
  const getProductos = async (categoria, success, error) => {
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
  getProductos("camperas", success, error);
  getProductos("pantalones", success, error);
  getProductos("zapatillas", success, error);
  d.addEventListener("click", (e) => {
    const $body = d.querySelector("body");
    const $tarjetaActiva = d.querySelector(".activo");
    if ($tarjetaActiva) {
      if (
        !(
          e.target.matches(".show-producto") ||
          e.target.matches(".show-producto *")
        )
      ) {
        $tarjetaActiva.parentNode.removeChild($tarjetaActiva);
        $body.classList.remove("stop-scrolling");
      } else {
        if (e.target.matches(".row-imagen")) {
          const $imgClicked = e.target;
          const $img1 = d.querySelector(".imagen1");
          const $url = $img1.getAttribute("src");
          $img1.setAttribute("src", $imgClicked.getAttribute("src"));
          $imgClicked.setAttribute("src", $url);
        }
      }
    } else {
      if (e.target.matches(".contenedor-productos *")) {
        const $tarjeta = e.target.parentNode;
        const $padre = $tarjeta.parentNode;

        getProductos(
          `${$tarjeta.dataset.tipo}/${$tarjeta.dataset.id}`,
          (x) => {
            const $section = d.createElement("section");
            $section.classList.add("home");

            const $divFirst = d.createElement("div");
            $divFirst.classList.add("home-img");

            const claves = Object.keys(x);
            const $imagenes = d.createElement("div");
            $imagenes.classList.add("main");
            let cont = 0;
            for (let i = 0; i < claves.length; i++) {
              if (claves[i].includes("foto")) {
                cont++;
                if (cont > 1) {
                  const $rows = d.createElement("div");
                  const $li = d.createElement("li");
                  const $img = d.createElement("img");
                  $img.setAttribute("src", x[claves[i]]);
                  $img.className = `row-imagen imagen${cont}`;
                  $img.setAttribute("alt", claves[i]);
                  $li.appendChild($img);
                  $rows.className = `row row${cont - 1}`;
                  $rows.appendChild($li);
                  const $clone = $rows.cloneNode($rows, true);
                  $imagenes.appendChild($clone);
                } else {
                  const $firstImg = d.createElement("img");
                  $firstImg.setAttribute("src", `${x[claves[i]]}`);
                  $firstImg.classList.add("imagen1");
                  $divFirst.appendChild($firstImg);
                }
              }
            }

            const $divText = d.createElement("div");
            $divText.classList.add("home-text");
            let stock = "Disponible";
            if (x.stock === 0) {
              stock = "Sin Stock";
            }
            $divText.innerHTML = `
            <h1>${x.nombre}</h1>
            <h5>${x.descripcion}</h5>
            <h4>Stock: <u>${stock}</u></h4>
            <h3>Precio $${x.precio}</h3>
            <a href="#" class="btn">Comprar!</a>
            `;
            $section.appendChild($divFirst);
            $section.appendChild($divText);

            const $contenedor = d.createElement("div");
            $contenedor.className = "show-producto activo";

            $contenedor.appendChild($section);
            $contenedor.appendChild($imagenes);

            const $recurso = d.querySelector(".seccion-productos");
            $recurso.appendChild($contenedor);
            $body.classList.add("stop-scrolling");
          },
          (x) => {
            const $node = d.createElement("div");
            $node.innerHTML = `<p>No fue posible caragar el elemento: ${x.status} -- ${x.statusText}</p>`;
            $node.className = "tarjeta activo";
            $padre.appendChild($node);
          }
        );
      }
    }
  });
}
