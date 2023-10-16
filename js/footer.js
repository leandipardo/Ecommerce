const d = document,
$footer = d.querySelector("footer"),
$txtPais = "Argentina.",
$txtCopy = "©Di Pardo. Todos los derechos reservados.",
$txtTerms = "Términos y Condiciones",
$txtPriv = "Política de privacidad y cookies";
import scroll from "./scrollBar.js";
export default function footer(){
    let $sectionRedes = d.createElement("section"),
    $twitter = d.createElement("i"),
    $twitterA = d.createElement("a"),
    $facebook = d.createElement("i"),
    $facebookA = d.createElement("a"),
    $youtube = d.createElement("i"),
    $youtubeA = d.createElement("a"),
    $instagram = d.createElement("i"),
    $instagramA = d.createElement("a"),
    $scrollbar = d.createElement("section"),
    $scroll = d.createElement("div"),
    $informacion = d.createElement("section"),
    $pPais = d.createElement("p"),
    $pCopy = d.createElement("p"),
    $pTerms = d.createElement("p"),
    $pPriv = d.createElement("P");
    $facebook.className = "fa-brands fa-facebook";
    $youtube.className = "fa-brands fa-youtube";
    $instagram.className = "fa-brands fa-instagram";
    $twitter.className = "fa-brands fa-square-x-twitter";
    scroll();



    $footer.appendChild($sectionRedes);
    $footer.appendChild($scrollbar);
    $footer.appendChild($informacion);

    $sectionRedes.classList.add("redes");

    $sectionRedes.appendChild($twitterA);
    $twitterA.appendChild($twitter);
    $twitterA.setAttribute("href","https://twitter.com/Nike");
    $twitterA.setAttribute("target","_blank");
    $twitter.setAttribute("alt","twitter icon");

    $sectionRedes.appendChild($facebookA);
    $facebookA.appendChild($facebook);
    $facebookA.setAttribute("href","https://twitter.com/Nike");
    $facebookA.setAttribute("target","_blank");
    $facebook.setAttribute("alt","Facebook icon");

    $sectionRedes.appendChild($youtubeA);
    $youtubeA.appendChild($youtube);
    $youtubeA.setAttribute("href","https://twitter.com/Nike");
    $youtubeA.setAttribute("target","_blank");
    $youtube.setAttribute("alt","YouTube icon");

    $sectionRedes.appendChild($instagramA);
    $instagramA.appendChild($instagram);
    $instagramA.setAttribute("href","https://twitter.com/Nike");
    $instagramA.setAttribute("target","_blank");
    $instagram.setAttribute("alt","Instagram icon");
    

    $informacion.appendChild($pPais);
    $pPais.innerText = $txtPais;

    $informacion.appendChild($pCopy);
    $pPais.innerText = $txtCopy;

    $informacion.appendChild($pTerms);
    $pPais.innerText = $txtTerms;

    $informacion.appendChild($pPriv);
    $pPais.innerText = $txtPriv;

    
}