const da = document,
  $tableAx = da.querySelector(".crud-table-axios"),
  $formAx = da.querySelector(".crud-form-axios"),
  $titleAx = da.querySelector(".crud-title-axios"),
  $templateAx = da.getElementById("crud-template").content,
  $fragmentAx = da.createDocumentFragment();

const getAllAx = async () => {
  try {
    let res = await axios.get("http://localhost:3000/santos");
    json = await res.data;
    console.log(json);
    json.map((json) => {
      $templateAx.querySelector(".name").textContent = json.nombre;
      $templateAx.querySelector(".constellation").textContent =
        json.constelacion;
      $templateAx.querySelector(".edit").dataset.id = json.id;
      $templateAx.querySelector(".delete").dataset.id = json.id;
      $templateAx.querySelector(".delete").dataset.name = json.nombre;
      $templateAx.querySelector(".delete").dataset.constellation =
        json.constelacion;
      let $clone = da.importNode($templateAx, true);
      $fragmentAx.appendChild($clone);
    });

    $tableAx.querySelector("tbody").appendChild($fragmentAx);
  } catch (err) {
    let message = err.statusText || "Ocurrio un error";
    $tableAx.insertAdjacentHTML(
      "afterend",
      `<p><b> Error ${err.status}: ${message}</b></p>`
    );
  }
};

da.addEventListener("submit", async (e) => {
  if (e.target === $formAx) {
    e.preventDefault();
  }
  if (!e.target.id.value) {
    // CREATE POST
    try {
      let options = {
          method: "POST",
          headers: { "Content-type": "application/json; charset=utf-8" },
          data: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          }),
        },
        res = await axios("http://localhost:3000/santos", options),
        json = await res.data;

      location.reload();
    } catch (err) {
      let message = err.statusText || "Ocurrio un error";
      $formAx.insertAdjacentHTML(
        "afterend",
        `<p><b>${err.status} : ${message}</b></p>`
      );
    }
  } else {
    // UPDATE PUT
    try {
        let options = {
            method: "PUT",
            headers: { "Content-type": "application/json; charset=utf-8" },
            data: JSON.stringify({
              nombre: e.target.nombre.value,
              constelacion: e.target.constelacion.value,
            }),
          },
          res = await axios( `http://localhost:3000/santos/${e.target.id.value}`, options),
          json = await res.data;
  
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        $formAx.insertAdjacentHTML(
          "afterend",
          `<p><b>${err.status} : ${message}</b></p>`
        );
      }
  }
});

da.addEventListener("click", async (e) => {
  if (e.target.matches(".delete")) {
    $titleAx.textContent = "Editar Santo";
    $formAx.nombre.value = e.target.dataset.name;
    $formAx.constelacion.value = e.target.dataset.constellation;
    $formAx.id.value = e.target.dataset.id;
  }
  if (e.target.matches(".edit")) {
    let isDelete = confirm(
        `¿Estas seguro de borrar el id ${e.target.dataset.id}`
      );
      if (isDelete) {
        try {
          let options = {
              method: "DELETE",
              headers: { "Content-type": "application/json; charset=utf-8" },
            },
            res = await axios(
              `http://localhost:3000/santos/${e.target.dataset.id}`,
              options
            ),
            json = await res.json();
  
          if (!res.ok)
            throw {
              status: res.status,
              statusText: res.statusText,
            };
          location.reload();
        } catch (err) {
          let message = err.statusText || "Ocurrio un error";
          $form.insertAdjacentHTML(
            "afterend",
            `<p><b>${err.status} : ${message}</b></p>`
          );
        }
      }
  }
});

da.addEventListener("DOMContentLoaded", getAllAx);
