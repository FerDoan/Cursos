var btnSideC = document.getElementById('btnSideC');
var btnSideA = document.getElementById('btnSideA');
var sideHC = document.getElementById('navBar');

const sideHideC = () => {
    btnSideA.classList.add('show');
    btnSideA.classList.remove('hide');
    btnSideC.classList.add('hide');
    btnSideC.classList.remove('show');
    sideHC.classList.add('hide')
    sideHC.classList.remove('show')
   
}
const sideHideA = () => {
    btnSideC.classList.add('show');
    btnSideC.classList.remove('hide');
    btnSideA.classList.add('hide');
    btnSideA.classList.remove('show');
    sideHC.classList.add('show');
    sideHC.classList.remove('hide')
}

btnSideC.addEventListener('click', sideHideC)
btnSideA.addEventListener('click', sideHideA)