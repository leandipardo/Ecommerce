const d = document,
  $footer = d.querySelector("footer"),
  $footerText = [
    "Argentina.",
    "©Di Pardo. Todos los derechos reservados.",
    "Términos y Condiciones",
    "Política de privacidad y cookies",
  ];

export default function footer() {
  let $footerRedes = [
    {
      icon: "fa-brands fa-facebook",
      url: "https://facebook.com/Nike",
      nombre: "facebook",
    },
    {
      icon: "fa-brands fa-youtube",
      url: "https://youtube.com/Nike",
      nombre: "youtube",
    },
    {
      icon: "fa-brands fa-instagram",
      url: "https://instagram.com/Nike",
      nombre: "instagram",
    },
    {
      icon: "fa-brands fa-square-x-twitter",
      url: "https://twitter.com/Nike",
      nombre: "twitter",
    },
  ];

  let $sectionRedes = d.createElement("section"),
    $informacion = d.createElement("section"),
    $fragment = d.createDocumentFragment();

  $sectionRedes.classList.add("redes");

  $footerRedes.forEach((el) => {
    const $a = d.createElement("a"),
      $i = d.createElement("i");
    $a.setAttribute("href", el.url);
    $a.setAttribute("target", "_blank");
    $i.className = el.icon;
    $i.setAttribute("alt", `${el.nombre} icon`);
    $a.appendChild($i);
    const $clone = $a.cloneNode($a, true);
    $sectionRedes.appendChild($clone);
  });
  const $ul = d.createElement("ul");

  $footerText.forEach((el) => {
    const $li = d.createElement("li");
    $li.innerHTML = `<p>${el}</p>`;
    const $clone = $li.cloneNode($li, true);
    $ul.insertAdjacentElement("beforeend", $clone);
  });
  $informacion.appendChild($ul);

  $fragment.appendChild($informacion);
  $fragment.appendChild($sectionRedes);
  $footer.appendChild($fragment);
}
