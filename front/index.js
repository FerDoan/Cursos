const form = document.getElementById("form")
const inpts = document.querySelectorAll("#form input")

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    emlc : false,
    pswdc:false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "eml":
           validarCampo(expresiones.correo, e.target , 'emlc');
            break;
        case "pswd":
            validarCampo(expresiones.password, e.target , 'pswdc');
        break;
    
        default:
            break;
    }
}

const validarCampo = (expresion,input,campo) =>{
    if (expresion.test(input.value)) {
        document.getElementById(`${campo}`).classList.add("form-correcto")
        document.getElementById(`${campo}`).classList.remove("form-incorrecto")
        document.querySelector(`#${campo} .p-error`).classList.remove('p-error-active')
        campos[campo] = true;
    }else{
        document.getElementById(`${campo}`).classList.add("form-incorrecto")
        document.getElementById(`${campo}`).classList.remove("form-correcto")
        document.querySelector(`#${campo} .p-error`).classList.add('p-error-active')
        campos[campo] = false;
    }
}

inpts.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    if(campos.emlc && campos.pswdc){
        form.reset();
        document.getElementById("msj-exito").classList.add('msj-exito-active')
        setTimeout(() =>{
            document.getElementById("msj-exito").classList.remove('msj-exito-active');
        },3000)

        document.querySelectorAll('.form-correcto').forEach((pass) => {
            pass.classList.remove('form-correcto');
        })
        location.href='pages/welcome.html'
    }
    else{
        document.getElementById("msj-f").classList.add('msj-f-active');
        setTimeout(() =>{
            document.getElementById("msj-f").classList.remove('msj-f-active');
        },3000)
    }
})
