const d = document;

export default function searchFilter(filter) {
  const search = (arr, filtro) => {
    arr.forEach((el) => {
      const text = el.childNodes[5].textContent.toLowerCase();
      const array1 = text.split(" ");
      filtro = filtro.toLowerCase();
      const array2 = filtro.split(" ");
      if (array2[array2.length - 1] === "") {
        array2.pop();
      }
      let arrFinal = [];

      array1.filter((word) =>
        array2.forEach((el) => {
          if (word.includes(el)) {
            arrFinal.push(word);
          }
        })
      );
      if (arrFinal.length >= array2.length) {
        el.setAttribute("style", "display: flex");
      } else {
        el.setAttribute("style", "display: none");
      }
    });
  };

  d.addEventListener("keyup", (e) => {
    const $searchBar = d.querySelector(".nav-search");
    if (e.target === $searchBar) {
      filter = "";
      const $arr = d.querySelectorAll(".contenedor-productos");
      e.preventDefault();
      search($arr, $searchBar.value);
    }
  });

  if (filter !== "") {
    const $arr = d.querySelectorAll(".contenedor-productos");
    search($arr, filter);
  }
}
