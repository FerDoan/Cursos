const fleI = document.getElementById('fleimg');
const fleR = document.getElementById('fler');
const btnI = document.getElementById('btnI');
const btnR = document.getElementById('btnR');
const fileI = document.querySelector('#fileI');
const fileR = document.querySelector('#fileR');

btnI.addEventListener('click',(e) =>{
    e.preventDefault();

    fleI.click();
})
// btnR.addEventListener('click',(e) =>{
//     e.preventDefault();

//     fleR.click();
// })

fleI.addEventListener('change', () =>{
    // const file = this.files[0];
    const file = fleI.files[0]
    console.log(file.name)
    if(file){
        const reader = new FileReader();
        reader.onload = () =>{
            const result = reader.result.name;
            fileI.textContent = file.name;
            // fileI.textContent = result;
        }
        reader.readAsDataURL(file);
    }
})

// SECCION MODAL

const close = document.querySelectorAll('.close')[0];
// const open = document.querySelectorAll('.cta')[0];
const modal = document.querySelectorAll('.modal')[0];
const modalC = document.querySelectorAll('.modal-container')[0];

btnR.addEventListener('click',(e)=>{
    e.preventDefault();
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

// VALIDACION

const form = document.getElementById('form');
const inpts = document.querySelectorAll('#form input')


const campos = {
    clt : false,
    rfc:false,
    prtj:false
}

const expresiones = {
	cliente: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	rfc: /^.{13}$/, // 4 a 12 digitos.
	porcentaje: /^[1-9][0-9]?$|^100$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
    switch (e.target.id) {
        case "clt":
           validarCampo(expresiones.cliente, e.target , 'clt');
            break;
        case "rfc":
            validarCampo(expresiones.rfc, e.target , 'rfc');
        break;
        case "prtj":
            validarCampo(expresiones.porcentaje, e.target , 'prtj');
        break;
    
        default:
            break;
    }
}

const validarCampo = (expresion,input,campo) =>{
    if (expresion.test(input.value)) {
        document.querySelector(`#${campo} .inp`).classList.add('true')
        document.querySelector(`#${campo} .inp`).classList.remove('false')
        document.querySelector(`#${campo} .p-error`).classList.remove('p-error-active')
        campos[campo] = true;
    }else{
        document.querySelector(`#${campo} .inp`).classList.add('false')
        document.querySelector(`#${campo} .inp`).classList.remove('true')
        document.querySelector(`#${campo} .p-error`).classList.add('p-error-active')
        campos[campo] = false;
    }
}


inpts.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

const btnG = document.getElementById('btnG');
const toast = document.querySelectorAll('.toast-success')[0];
const toastw = document.querySelectorAll('.toast-warning')[0];

// btnG.addEventListener('click',(e)=>{
//     e.preventDefault();
//     toast.style.opacity = "1";
//     toast.style.visibility = "visible";
//     toast.classList.toggle("modal-close")
// })

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(campos.clt && campos.prtj && campos.rfc){
        form.reset();
        campos.clt = false;
        campos.prtj = false;
        campos.rfc = false;
        toast.style.opacity = "1";
        toast.style.visibility = "visible";
        toast.classList.toggle("toast-close")
        setTimeout(() =>{
            toast.classList.toggle("toast-close")
        },2000)

        document.querySelectorAll('.true').forEach((pass) => {
            pass.classList.remove('true');
        })
        // location.href='pages/welcome.html'
    }
    else{
        // alert('falta algo')
        // document.getElementById("msj-f").classList.add('msj-f-active');
        // setTimeout(() =>{
        //     document.getElementById("msj-f").classList.remove('msj-f-active');
        // },3000)
        toastw.style.opacity = "1";
        toastw.style.visibility = "visible";
        toastw.classList.toggle("toast-close")
        setTimeout(() =>{
            toastw.classList.toggle("toast-close")
        },2000)
    }
})