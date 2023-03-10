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

// validar for
var form = document.getElementById("form");

const validar = (e) => {
    inpNombre = document.getElementById("nombre");
    inpEmail = document.getElementById("email");
    inpCom = document.getElementById("comment");
    alertSucess = document.getElementById("alert-sucess");
    alertError = document.getElementById("alert-error");

    if( inpNombre.value == 0 || inpCom.value == 0 || inpEmail.value == 0){
        e.preventDefault();
        alertError.classList.remove("hide");
        alertError.classList.add("show");
        setTimeout(() =>{
            alertError.classList.add("hide");
            alertError.classList.remove("show")
        },3000)
    }else{
        e.preventDefault();
        alertSucess.classList.remove("hide");
        alertSucess.classList.add("show");
        setTimeout(() =>{
            alertSucess.classList.add("hide");
            alertSucess.classList.remove("show")
        },3000)
        inpNombre.value ="";
        inpCom.value = "";
        inpEmail.value = "";
    }
}

form.addEventListener("submit", validar);

// scroll top boton
var btnTop = document.getElementById("btn-top");

// detextar scroll
window.addEventListener('scroll', () =>{
    var scroll = document.documentElement.scrollTop;
    var fullScreen = document.documentElement.offsetHeight; //detectar el alto 
    var sizeVp = document.documentElement.clientHeight;
    if (scroll > 100) {
        btnTop.classList.add('show');
    }else{
        btnTop.classList.remove('show')
    }

    // modidficar cuando llegue al final
    if (fullScreen == ( scroll + sizeVp )) {
        btnTop.classList.add('scrollfinal')
    }
    else{
        btnTop.classList.remove('scrollfinal')
    }
})

//detectar evento click
btnTop.addEventListener('click',()=>{
    window.scrollTo(0,0)
})

var btnlogo = document.getElementById('logo');

btnlogo.addEventListener('click',() =>{
    window.scrollTo(0,0);
})