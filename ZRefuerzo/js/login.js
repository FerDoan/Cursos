// import datos from "data.js";
import datos from "./data.js";
// const data = require('../data')
// Primero accedemos a a los datos del form para 
// ya tenerlos
const form = document.getElementById('form');
// obtenemos los datos de los inputs
const inp = document.querySelectorAll('#form input'); // de esta forma de puendes sacr un arreglo de todos inputs que esten detros de ese ID

//creamos un objeto con lo que vamos a validar
const expresiones = {
    cliente: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/
}

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

const data = {
    name: '',
    password: ''
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
            data.name = e.target.value;
            break;
        case "psw":
            validarForm(expresiones.password,e.target,"pswc")
            data.password = e.target.value
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
//aparecer toast
const toastE = document.querySelectorAll('.toast-error')[0];
const toastS = document.querySelectorAll('.toast-success')[0];


//comparar con json
const verificarUser = () => {
    datos.usuarios.forEach((d) => {
    console.log(d.name)
    if (d.name == data.name && d.password == data.password) {
        campos.name = true;
        campos.pass = true;
        // console.log('auie')
    }
})
}

//para pasar nombre de usuario
// const nuser = document.getElementById('user');

export const nuser = data.name;

// evento que se activa al hacer submit en el form
form.addEventListener('submit',(e) => {
    e.preventDefault();
    verificarUser();
    if(campos.cltc && campos.pswc && campos.name && campos.pass){
        form.reset();
        toastS.classList.toggle('toast-close')
        setTimeout(()=>{
            toastS.classList.toggle('toast-close')
        },2000)

        inp.forEach((input) =>{
            input.classList.remove('true')
        })
        campos.cltc = false;
        campos.pswc = false;
        campos.name = false;
        campos.pass = false;
        // nuser.textContent = data.name;
        // document.querySelector('#user').textContent = 'Fer';
        location.href = 'index.html'
    }else{
        toastE.classList.toggle('toast-close')
        console.log('algo fallo')
        setTimeout(()=>{
            toastE.classList.toggle('toast-close')
        },2000)
    }
})