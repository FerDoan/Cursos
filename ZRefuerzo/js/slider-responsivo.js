const d = document;

export default function sliderResponsive(contenedor, btnPrev, btnNext) {
  const $contenedor = d.querySelector(contenedor);
  const $btnPrev = d.querySelector(btnPrev);
  const $btnNext = d.querySelector(btnNext);
  const $elementos = $contenedor.children;
  let i = 0;


  d.addEventListener("click", (e) => {
    if (e.target === $btnPrev) {
      $elementos[i].classList.remove("item-active");
      i--;

      if (i < 0) {
        i = $elementos.length - 1;
      }
      $elementos[i].classList.add("item-active");
    }

    if (e.target === $btnNext) {
      $elementos[i].classList.remove("item-active");
      i++;
      if (i >= $elementos.length) {
        i = 0;
      }
      $elementos[i].classList.add("item-active");
    }
  });
}