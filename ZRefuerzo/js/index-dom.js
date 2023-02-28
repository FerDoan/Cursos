import hamburgerButton from "../js/hamburger_button.js";
import { clockFunction, alarmaFunction } from "../js/reloj-alarma.js";
import { keyboardBall, shortcuts } from "../js/keyboardBall.js";
import countdown from "../js/countdown.js";
import scroll from "../js/scroll.js";
import modeDark from "../js/mode-dark.js";
import responsiveJs from "../js/responsiveJs.js";
import tester from "../js/responsive-tester.js";
import deteccionDispositivos from "../js/deteccion_dispositivos.js";
import deteccionRed from "../js/deteccion-red.js";
// import deteccionWebCam from "../js/deteccion-webcam.js";
import detectarGeolocalizacion from "../js/geolocalizacion.js";
import filter from "../js/filtro_buqueda.js";
import seleccionarGanador from "../js/ganador.js";
import sliderResponsive from "../js/slider-responsivo.js";
import scrollSpy from "../js/scrollSpy.js";
import videoInteligente from "../js/video-inteligente.js";
import validarFormulario from "../js/validacion_formulario.js";
import narrador from "../js/narrador.js";

//Añadiendo eventos con 'DOMContentLoaded'
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerButton("#hamburger-button", "#menu", "#menu ul li a");
  clockFunction("#btnIniciar", "#btnDetener");
  alarmaFunction("#alarmaIniciar", "#alarmaDetener");
  countdown("#countdown", "#date", ".mostrarCountdown", ".detenerCountdown");
  scroll("#btnScroll");
  responsiveJs(
    ".section4--video",
    `<a href="https://www.youtube.com/watch?v=xYmIRkitnnQ&t=1s" target="_blank" rel="noopener">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/xYmIRkitnnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveJs(
    ".section4--mapa",
    `<a href="https://goo.gl/maps/9Mn6r6cGbv39RAB88" target="_blank" rel="noopener">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.859260728401!2d-99.19436638459169!3d19.331912486941594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdfffe5cfdd5cf%3A0xb87221ef658004e2!2sEstadio%20Ol%C3%ADmpico%20Universitario!5e0!3m2!1sen!2smx!4v1628575624806!5m2!1sen!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  tester("#form");
  deteccionDispositivos("#deteccion-dispositivos");
  deteccionRed();
//   deteccionWebCam("#section8", {
//     audio: true,
//     video: { width: 1280, height: 720 },
//   });
  detectarGeolocalizacion("#section9");
  filter("#search", ".clearSearch", ".cards__filter");
  seleccionarGanador(".giveaway", "#btnWinner");
  sliderResponsive(".slider__content", ".prevItem", ".nextItem");
  scrollSpy();
  videoInteligente();
  validarFormulario();
});

modeDark("#btnModeDark");
narrador();

d.addEventListener("keydown", (e) => {
  keyboardBall(e, "#keyboard-ball", "#keyboard-wrapper");
  shortcuts(e);
});

