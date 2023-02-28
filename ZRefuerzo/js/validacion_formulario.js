const d = document;

export default function validarFormulario() {
  const $formulario = d.querySelector("#form-validation");
  const $inNombre = d.querySelector("#in-name");
  const $inCorreo = d.querySelector("#in-email");
  const $inAsunto = d.querySelector("#in-issue");
  const $inComentario = d.querySelector("#in-comments");

  const $spans = d.querySelectorAll("#form-validation span");

  let validarNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let validarCorreo =
    /^[a-z0-9]+(\.[_a-z0-9]+)@[a-z0-9-]+(\.[a-z0-9-]+)(\.[a-z]{2,15})$/;

  d.addEventListener("keyup", (e) => {
    if (e.target === $inNombre) {
      if (validarNombre.test($inNombre.value)) {
        $spans[0].classList.add("in--none");
      } else {
        $spans[0].classList.remove("in--none");
      }
    }

    if (e.target === $inCorreo) {
      if (validarCorreo.test($inCorreo.value)) {
        $spans[1].classList.add("in--none");
      } else {
        $spans[1].classList.remove("in--none");
      }
    }

    if (e.target === $inComentario) {
      if ($inComentario.value.length <= 255) {
        $spans[3].classList.add("in--none");
      } else {
        $spans[3].classList.remove("in--none");
      }
    }
  });

  const $btnSubmit = d.querySelector("#form-validation input[type='submit']");
  const $loader = d.querySelector(".contact-form-loader");
  const $response = d.querySelector(".contact-form-response");

  d.addEventListener("submit", (e) => {
    $loader.classList.remove("form--none");
    setTimeout((e) => {
      $loader.classList.add("form--none");
      $response.classList.remove("form--none");
      $formulario.reset();
      setTimeout((e) => {
        $response.classList.add("form--none");
      }, 3000);
    }, 3000);
  });
}