const d = document;

export default function searchFilter() {
  d.addEventListener("keyup", (e) => {
    const $searchBar = d.querySelector(".nav-search"),
      $arr = d.querySelectorAll(".contenedor-productos");

    if (e.target === $searchBar) {
      let string = $searchBar.value;
      $arr.forEach((el) => {
        const $h2 = el.childNodes[5].textContent.toLowerCase();
        if (!$h2.includes(string)) {
          el.setAttribute("style", "display: none");
        } else {
          el.setAttribute("style", "display: flex");
        }
      });
    }
  });
}
