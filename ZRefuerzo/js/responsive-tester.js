const d = document;
const w = window;
const elementoA = d.createElement("a");

export default function responsiveJS(contenedor, contenidoMovil, contenidoDesktop){

    const $contenedor = d.querySelector(contenedor);
    let mql = w.matchMedia('(max-width: 630px)');

    const responsive = (e) =>{
        if(e.matches){
            $contenedor.innerHTML = contenidoMovil;
        }else{
            $contenedor.innerHTML = contenidoDesktop;
        }
    }

    mql.addEventListener("change", responsive);
    responsive(mql);
}


// import tester from "./responsiveJs";

// const d = document;
// const w = window;
// // const elementoA = d.createElement("a");

// export default function responsiveJS(form){

//     const $form = d.querySelector(form);
//     let mql = w.matchMedia('(max-width: 630px)');
//     let tester;
//     // const responsive = (e) =>{
//     //     if(e.matches){
//     //         $contenedor.innerHTML = contenidoMovil;
//     //     }else{
//     //         $contenedor.innerHTML = contenidoDesktop;
//     //     }
//     // }

//     // mql.addEventListener("change", responsive);
//     d.addEventListener("submit", (e) => {
//         if (e.target === $form) {
//             e.preventDefault();
//             tester = window.open(
//                 $form.url.value,
//                 "tester",
//                 `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
//             )
//         }
//     });

//     d.addEventListener('click', (e) => {
//         if (e.target === $form.cerrar) {
//             tester.close();
//         }
//     });
//     // responsive(mql);
// }