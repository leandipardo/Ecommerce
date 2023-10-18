import searchFilter from "./searchFilter.js";

const d = document;

export default function categorias(section) {
  section.innerHTML = `
  <div class="seccion-categorias">
  <ul>
  <li class="categoria"><a href="#" alt="campera">Camperas</a></li>
  <li class="categoria"><a href="#" alt="pantalon">Pantalones</a></li>
  <li class="categoria"><a href="#" alt="zapatilla">Zapatillas</a></li>
  <li class="categoria"><a href="#" alt="modelo">Modelos</a></li>
  </ul>
  </div>
  `;

  d.addEventListener("click", (e) => {
    if (e.target.matches(".categoria *")) {
      let string = e.target.getAttribute("alt");
      searchFilter(string);
    }
  });
}
