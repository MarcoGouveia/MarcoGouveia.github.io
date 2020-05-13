const menuItens = document.querySelectorAll('.nav-bar a[href^="#"');

menuItens.forEach(itens => {
    itens.addEventListener('click', scrollSmoth);
})


function scrollSmoth(event){

    event.preventDefault();

    const element = event.target;
    const id = element.getAttribute('href');

    const toTarget = document.querySelector(id).offsetTop;

    window.scroll({
        top: toTarget -70,
        behavior: 'smooth'
        
    })
}

/* Menu Responsivo */ 

let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show);
    show = !show;


    menuItens.forEach(itens => {
        itens.addEventListener('click', menuOff);
    })


})


function menuOff(){
    show = !show;
    document.body.style.overflow = "initial";
    menuSection.classList.remove("on");
}