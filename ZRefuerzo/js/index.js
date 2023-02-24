import data from '../js/data.js'

// obtener nombre de usuario
const nameUser = localStorage.user;
document.getElementById('user').textContent = nameUser;
// console.log(localStorage)
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
    // console.log(data)
    liO.forEach((li) => {
        li.classList.toggle('liO')
    })
    if (iconBtn.classList == "fas fa-square-caret-right") {
        iconBtn.classList.remove('fa-square-caret-right');
        iconBtn.classList.add('fa-square-caret-left')
    }else{
        iconBtn.classList.add('fa-square-caret-right');
        iconBtn.classList.remove('fa-square-caret-left')   
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

// const trAc = document.createElement('tr');
// trAc.className = 'trAc';
// const dtV = document.createElement('th');
// const dtVa = document.createElement('th');
// const dtB = document.createElement('th');
// dtB.classList = 'btn-ag';
// const Bsp = document.createElement('span');
// Bsp.classList = 'fas fa-plus-circle';
// Bsp.id = 'agregar';
// dtB.appendChild(Bsp)
// trAc.appendChild(dtV);
// trAc.appendChild(dtVa);
// trAc.appendChild(dtB);

// const trenc = document.createElement('tr');
// const dtUser = document.createElement('th');
// const dtCon = document.createElement('th');
// const dtAcc = document.createElement('th');
// let txtUser = document.createTextNode('Nombre de Usuario');
// let txtCon = document.createTextNode('Contraseña');
// let txtAcc = document.createTextNode('Acciones');
// dtUser.appendChild(txtUser);
// dtCon.appendChild(txtCon);
// dtAcc.appendChild(txtAcc);
// trenc.appendChild(dtUser);
// trenc.appendChild(dtCon);
// trenc.appendChild(dtAcc);

// ttlb.appendChild(trAc);
// ttlb.appendChild(trenc);

// 
{/* <tr class="trAc">
                <th></th>
                <th></th>
                <th class="btn-ag">
                  <span id="agregar" class="fas fa-plus-circle"></span>
                </th>
              </tr>
              <tr>
                <th>Nombre de Usuario</th>
                <th>Contraseña</th>
                <th>Acciones</th>
              </tr> */}
const charge = data.usuarios.map((user) =>{
    // console.log(user)
    // const tlb = document.createElement('table')
    const trUsers = document.createElement('tr');
    // const trAc = document.createElement('tr');
    // trAc.className = 'trAc';
    // const dtV = document.createElement('td');
    // const dtVa = document.createElement('td');
    // const dtB = document.createElement('td');
    // dtB.classList = 'btn-ag';
    // const Bsp = document.createElement('span');
    // Bsp.classList = 'fas fa-plus-circle';
    // Bsp.id = 'agregar';
    // Bsp.appendChild(Bsp)
    // trAc.appendChild(dtV);
    // trAc.appendChild(dtVa);
    // trAc.appendChild(dtB);
    
   
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
    // ttlb.appendChild(trenc);
    // ttlb.appendChild(trAc);
    ttlb.appendChild(trUsers);
    // tlb.appendChild(ttlb);
    
    const checkU = document.getElementById(user.name);
    // if (user.admin == '1') {
    //     checkU.checked = true
    //     console.log('activo')
    // }
    const nuevo = {
                id:5,
                name:'Nuevo',
                password:'2222',
                admin: '1'
            
    }

    const valorChec = (e) =>{
        // e.preventDefault();
        // dtAccion.checked 
        // console.log(checkU)
        // if (user.admin == '1') {
        //     dtAccion.checked
        // }       
        if (checkU.checked) {
            user.admin = '1';
            data.usuarios.push(nuevo)
            ttlb.appendChild(trUsers);
            // console.log(localStorage)
            // console.log(data.usuarios)
            // console.log(user.id)
            // charge();
        }else{
            user.admin = '0';
        }
    }
     checkU.addEventListener('click',valorChec)
    

})

const btnLogout = document.getElementById('logout');

btnLogout.addEventListener('click',(e) =>{
    localStorage.clear();
    // window.history.pushState('login.html')
    location.href = 'login.html'
})

const ctn = document.getElementById('ctn');
const adm = document.getElementById('adm');
const est = document.getElementById('est');

adm.addEventListener('click',() => {
    // ctn.load('index.html')
    console.log('no no no')
    // const xhr = new XMLHttpRequest();
    // xhr.open('POST','login.html');
    // xhr.setRequestHeader('Content-Type', 'text/plain');
    // xhr.send();
    // xhr.onload = (data) =>{
    //     document.querySelector('.container').innerHTML = data.currentTarget.response;
    // }
})

// Funciones para agregar
const btnA = document.getElementById('agregar');
const close = document.querySelectorAll('.close')[0];
// const open = document.querySelectorAll('.cta')[0];
const modal = document.querySelectorAll('.modal')[0];
const modalC = document.querySelectorAll('.modal-container')[0];
// const AddU = document.getElementById('AddUser');
btnA.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('sisis')
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close")
})

close.addEventListener('click',(e)=>{
    e.preventDefault();
    // modalC.style.opacity = "0";
    // modalC.style.visibility = "hidden";
    modal.classList.toggle('modal-close')
    setTimeout(() => {
        modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
    },700)
})
// AddU.addEventListener('click',(e)=>{
//     e.preventDefault();
//     // modalC.style.opacity = "0";
//     // modalC.style.visibility = "hidden";
//     modal.classList.toggle('modal-close')
//     setTimeout(() => {
//         modalC.style.opacity = "0";
//     modalC.style.visibility = "hidden";
//     },700)
// })

window.addEventListener('click',(e)=>{
    // console.log(e.target)
    if(e.target == modalC){
        e.preventDefault();
        // modalC.style.opacity = "0";
        // modalC.style.visibility = "hidden";
        modal.classList.toggle('modal-close')
        setTimeout(() => {
            modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
        },900)
    }
})

// const btnA = document.getElementById('agregar');

// btnA.addEventListener('click', modalOpen)
