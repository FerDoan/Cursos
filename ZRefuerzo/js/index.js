// import nuser from "./login.js";
// import { gName } from "./dataGlobal.js";
document.getElementById('user').textContent = 'Fer';

// console.log(gName)
const btnSideC = document.getElementById('btnSideC');
// const btnSideA = document.getElementById('btnSideA');
const sideHC = document.getElementById('navBar');
const liO = document.querySelectorAll('#navBar li');
const iconBtn = document.querySelectorAll('#btnSideC i')[0];

const sideHideC = () => {
    // btnSideA.classList.add('show');
    // btnSideA.classList.remove('hide');
    // btnSideC.classList.add('hide');
    // btnSideC.classList.remove('show');
    // sideHC.classList.add('hide')
    // sideHC.classList.remove('show')
    sideHC.classList.toggle('side-barO')

    liO.forEach((li) => {
        li.classList.toggle('liO')
    })
    if (iconBtn.classList == "fas fa-arrow-right") {
        iconBtn.classList.remove('fa-arrow-right');
        iconBtn.classList.add('fa-arrow-left')
    }else{
        iconBtn.classList.add('fa-arrow-right');
        iconBtn.classList.remove('fa-arrow-left')   
    }
   
}
const sideHideA = () => {
    // btnSideC.classList.add('show');
    // btnSideC.classList.remove('hide');
    // btnSideA.classList.add('hide');
    // btnSideA.classList.remove('show');
    // sideHC.classList.add('show');
    // sideHC.classList.remove('hide')
}

btnSideC.addEventListener('click', sideHideC)
// btnSideA.addEventListener('click', sideHideA)

