var btnOpenMenu = document.getElementById("btnOpenMenu");
var btnCloseMenu = document.getElementById("btnCloseMenu");
var menuBar = document.getElementById("menuBar");
var enlaces = document.getElementById("enlaces")

function openMenu() {
    menuBar.classList.add("active");
}

function closeMenu(){
    menuBar.classList.remove("active");
}

function closeMenuEnlace() {
    menuBar.style.transitionDelay = ".5s";
    menuBar.classList.remove("active");
}


btnOpenMenu.addEventListener("click", openMenu)
btnCloseMenu.addEventListener("click", closeMenu)
enlaces.addEventListener("click",closeMenuEnlace)


// Slider de productos

var container = document.querySelector('.slider'),
    btnIz = document.getElementById("btnIzq"),
    btnDer = document.getElementById("btnDer");

function moverDer(){
    container.scrollLeft += container.offsetWidth;
}

function moverIzq(){
    container.scrollLeft -= container.offsetWidth;
}

btnDer.addEventListener("click", moverDer);
btnIz.addEventListener("click", moverIzq);
