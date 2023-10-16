export default function scroll(){
    document.addEventListener("scroll",(e)=>{
    let $scrollBar = document.querySelector(".scrollbar"),
    progreso = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    $scrollBar.style.width=`calc(${progreso}vw + 5px)`;
})
}
