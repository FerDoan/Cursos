import data from '../js/data.js'

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
    console.log(data)
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
// variable de esta tabla}
// const datos = data.usuarios;
// Crear datos en tabla dinamicamente
const ttlb = document.getElementById('tlb');

data.usuarios.map((user) =>{
    console.log(user)
    // const tlb = document.createElement('table')
    const trUsers = document.createElement('tr');
    const dtName = document.createElement('td');
    const dtPass = document.createElement('td');
    const dtAccion = document.createElement('td');
    dtAccion.style.textAlign = 'center';
    let txtPass = document.createTextNode(user.password);
    let txtName = document.createTextNode(user.name);
    //Creacion de botones
    const check = document.createElement('input');
    check.id = user.name;
    check.type = 'checkbox';

    if (user.admin == '1') {
        check.checked = true;
    }

    dtAccion.appendChild(check)
    dtName.appendChild(txtName);
    dtPass.appendChild(txtPass);
    trUsers.appendChild(dtName);
    trUsers.appendChild(dtPass);
    trUsers.appendChild(dtAccion);
    ttlb.appendChild(trUsers);
    // tlb.appendChild(ttlb);
    
    const checkU = document.getElementById(user.name);
    // if (user.admin == '1') {
    //     checkU.checked = true
    //     console.log('activo')
    // }
    const valorChec = (e) =>{
        // e.preventDefault();
        // dtAccion.checked 
        // console.log(checkU)
        // if (user.admin == '1') {
        //     dtAccion.checked
        // }       
        if (checkU.checked) {
            user.admin = '1';

            // console.log(user.id)
        }else{
            user.admin = '0';
        }
    }
     checkU.addEventListener('click',valorChec)
    

})