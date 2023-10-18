const d = document;

export default function searchFilter(filter) {
  const search = (arr, filtro) => {
    arr.forEach((el) => {
      const text = el.childNodes[5].textContent.toLowerCase();
      if (text.includes(filtro)) {
        el.setAttribute("style", "display: flex");
      } else {
        el.setAttribute("style", "display: none");
      }
    });
  };

  d.addEventListener("keyup", (e) => {
    filter = "";
    const $searchBar = d.querySelector(".nav-search"),
      $arr = d.querySelectorAll(".contenedor-productos");
    if (e.target === $searchBar) {
      e.preventDefault();
      search($arr, $searchBar.value);
    }
  });

  if (filter !== "") {
    const $arr = d.querySelectorAll(".contenedor-productos");
    search($arr, filter);
  }
}
