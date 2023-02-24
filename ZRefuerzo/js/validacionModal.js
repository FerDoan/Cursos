// import datos from "data.js";
import dat from "./data.js";
// const data = require('../data')
// Primero accedemos a a los datos del form para 
// ya tenerlos
const form = document.getElementById('form');
// obtenemos los datos de los inputs
const inp = document.querySelectorAll('#form input'); // de esta forma de puendes sacr un arreglo de todos inputs que esten detros de ese ID
const inpAdd = document.querySelectorAll('#fAdd input');
//creamos un objeto con lo que vamos a validar
const expresiones = {
    cliente: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/
}

const datos = dat.usuarios;

const campos = {
    cltc: false,
    pswc: false,
    name: false,
    pass: false
}

// const datos = {
//     usuarios:[
//         {
//             name:'Fer',
//             password:'1234'
//         },
//         {
//             name:'Armando',
//             password:'1234'
//         }
//     ]
// };

const dataPush = {
    id: Date.now(),
    name: '',
    password: '', 
    admin: '1'
}


// funcion para ver que input se esta seleccionando
const validarFormularioCC = (e) =>{
    e.preventDefault();
// cree un switch para agarrar el valor al cual se le esta haciendo click
    switch (e.target.id) {
        case "clt":
            //llamamos a la funcion y le mandamos los valores
            validarForm(expresiones.cliente,e.target,"cltc")
            //le pasamos el valor de campo del div para poder agregar subclase
            dataPush.name = e.target.value;
            
            break;
        case "psw":
            validarForm(expresiones.password,e.target,"pswc")
            dataPush.password = e.target.value
            break;

        default:
            break;
    }
}

// creamos una funcion a la cuel le pasaremos información que necesitemos
// en este caso la exprecion, el input y el nombre de campo id
const validarForm = (expresion,input,campo) =>{
    if(expresion.test(input.value)){
        document.querySelector(`#${campo} .inp`).classList.add('true');
        document.querySelector(`#${campo} .inp`).classList.remove('false');
        document.querySelector(`#${campo} .msj`).classList.remove('msj-error');
        campos[campo] = true;
        // console.log(true)
    }else{
        document.querySelector(`#${campo} .inp`).classList.remove('true');
        document.querySelector(`#${campo} .inp`).classList.add('false');
        document.querySelector(`#${campo} .msj`).classList.add('msj-error');
        campos[campo] = false;

        // console.log(false)
    }
}

// crear eventos para cuando de presione o se este usando algun input
inp.forEach((input) => {
    //por cada input que encuentre el el arreglo haz esto
    input.addEventListener('keyup', validarFormularioCC);
    input.addEventListener('blur', validarFormularioCC);
}
)
inpAdd.forEach((input) => {
    //por cada input que encuentre el el arreglo haz esto
    input.addEventListener('keyup', validarFormularioCC);
    input.addEventListener('blur', validarFormularioCC);
}
)
//aparecer toast
const toastE = document.querySelectorAll('.toast-error')[0];
const toastS = document.querySelectorAll('.toast-success')[0];


//comparar con json
const verificarUser = () => {
    datos.forEach((d) => {
    // console.log(d.name)
    if (d.name == dataPush.name && d.password == dataPush.password) {
        campos.name = true;
        campos.pass = true;
        // console.log('auie')
    }
})
}

// const btnA = document.getElementById('agregar');

// btnA.addEventListener('click',(e)=>{
//     e.preventDefault();
//     modalC.style.opacity = "1";
//     modalC.style.visibility = "visible";
//     modal.classList.toggle("modal-close")
// })

//para pasar nombre de usuario
// const nuser = document.getElementById('user');

// Validación Add User
const userA = {
    name:'',
    password:'',
    admin:'1'
}
const ttlb = document.getElementById('tlb');

const charge = () => { 
    limpiarTable();
    datos.push(dataPush)

//     const trAc = document.createElement('tr');
// trAc.className = 'trAc';
// const dtV = document.createElement('th');
// const dtVa = document.createElement('th');
// const dtB = document.createElement('th');
// dtB.classList = 'btn-ag';
// const Bsp = document.createElement('span');
// Bsp.classList = 'fas fa-plus-circle';
// Bsp.id = 'add';
// dtB.appendChild(Bsp)
// trAc.appendChild(dtV);
// trAc.appendChild(dtVa);
// trAc.appendChild(dtB);

const trenc = document.createElement('tr');
const dtUser = document.createElement('th');
const dtCon = document.createElement('th');
const dtAcc = document.createElement('th');
let txtUser = document.createTextNode('Nombre de Usuario');
let txtCon = document.createTextNode('Contraseña');
let txtAcc = document.createTextNode('Acciones');
dtUser.appendChild(txtUser);
dtCon.appendChild(txtCon);
dtAcc.appendChild(txtAcc);
trenc.appendChild(dtUser);
trenc.appendChild(dtCon);
trenc.appendChild(dtAcc);

// ttlb.appendChild(trAc);
ttlb.appendChild(trenc);
    datos.map((user) =>{
    // console.log(user)
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
            datos.push(nuevo)
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
    

})}

// limpiar tabla
const limpiarTable = () =>{
    // const tableUser = document.querySelector('.lista-users');
    // console.log(tableUser.firstChild)
    while(ttlb.firstChild){
        ttlb.removeChild(ttlb.firstChild);
    }
}

const fAdd = document.getElementById('fAdd');

const limpiarDatos = () => {
    dataPush.id = Date.now();
    dataPush.name = '';
    dataPush.password = '';
    dataPush.admin = '';
}
// const modal = document.querySelectorAll('.modal')[0];
// const modalC = document.querySelectorAll('.modal-container')[0];

// const btnA = document.getElementById('agregar');
// btnA.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log('sisis')
//     modalC.style.opacity = "1";
//     modalC.style.visibility = "visible";
//     modal.classList.toggle("modal-close")
// })
const btnA = document.getElementById('add');
const close = document.querySelectorAll('.close')[0];
// const open = document.querySelectorAll('.cta')[0];
const modal = document.querySelectorAll('.modal')[0];
const modalC = document.querySelectorAll('.modal-container')[0];
// const AddU = document.getElementById('AddUser');
if(btnA){
btnA.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('sisis')
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close")
})}

fAdd.addEventListener('submit',(e) => {
    e.preventDefault();
    console.log('si entra aqui')
    // datos.push(dataPush)
    // userA = data;   
    console.log(datos.usuarios) 
    verificarUser();
    if(campos.cltc && campos.pswc){
        fAdd.reset();
            // modalC.style.opacity = "0";
            // modalC.style.visibility = "hidden";
        // modal.classList.toggle('modal-close')
        // setTimeout(() => {
        //     modalC.style.opacity = "0";
        // modalC.style.visibility = "hidden";
        // },700)
        toastS.classList.toggle('toast-close')
        setTimeout(()=>{
            toastS.classList.toggle('toast-close')
        },2000)

        inpAdd.forEach((input) =>{
            input.classList.remove('true')
        })
        campos.cltc = false;
        campos.pswc = false;
        // dataPush.name = '';
        // dataPush.password = '';
        charge();
        limpiarDatos();
        modal.classList.toggle('modal-close')
        setTimeout(() => {
            modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
        },700)
        // console.log(dataPush)
        // campos.name = false;
        // campos.pass = false;
        // localStorage.user = data.name;
        // nuser.textContent = data.name;
        // document.querySelector('#user').textContent = 'Fer';
        // location.href = 'index.html'
    }else{
        toastE.classList.toggle('toast-close')
        console.log('algo fallo')
        setTimeout(()=>{
            toastE.classList.toggle('toast-close')
        },2000)
    }
})