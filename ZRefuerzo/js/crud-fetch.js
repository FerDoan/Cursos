const dc = document,
  $table = dc.querySelector(".crud-table-fetch"),
  $form = dc.querySelector(".crud-form-fetch"),
  $title = dc.querySelector(".crud-title-fetch"),
  $template = dc.getElementById("crud-template").content,
  $fragment = dc.createDocumentFragment();

const getAllF = async () => {
  try {
    let res = await fetch("http://localhost:3000/santos"),
      json = await res.json();
    if (!res.ok)
      throw {
        status: res.status,
        statusText: res.statusText,
      };

    json.map((json) => {
      $template.querySelector(".name").textContent = json.nombre;
      $template.querySelector(".constellation").textContent = json.constelacion;
      $template.querySelector(".edit").dataset.id = json.id;
      $template.querySelector(".delete").dataset.id = json.id;
      $template.querySelector(".delete").dataset.name = json.nombre;
      $template.querySelector(".delete").dataset.constellation =
        json.constelacion;
      let $clone = dc.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    let message = err.statusText || "Ocurrio un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>${err.status} : ${message}</b></p>`
    );
  }
};

dc.addEventListener("DOMContentLoaded", getAllF);

dc.addEventListener("submit", async (e) => {
  if (e.target === $form) {
    e.preventDefault();
    console.log(e.target.constelacion.value);
    if (!e.target.idf.value) {
      // POST -CREATE
      console.log(e.target.id.value);
      try {
        let options = {
            method: "POST",
            headers: { "Content-type": "application/json; charset=utf-8" },
            body: JSON.stringify({
              nombre: e.target.nombre.value,
              constelacion: e.target.constelacion.value,
            }),
          },
          res = await fetch("http://localhost:3000/santos", options),
          json = await res.json();

        if (!res.ok)
          throw {
            status: res.status,
            statusText: res.statusText,
          };
        location.reload();
      } catch (error) {
        let message = err.statusText || "Ocurrio un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>${err.status} : ${message}</b></p>`
        );
      }
    } else {
      //PUT UPDATE
      try {
        let options = {
            method: "PUT",
            headers: { "Content-type": "application/json; charset=utf-8" },
            body: JSON.stringify({
              nombre: e.target.nombre.value,
              constelacion: e.target.constelacion.value,
            }),
          },
          res = await fetch(
            `http://localhost:3000/santos/${e.target.idf.value}`,
            options
          ),
          json = await res.json();

        if (!res.ok)
          throw {
            status: res.status,
            statusText: res.statusText,
          };
        location.reload();
      } catch (error) {
        let message = err.statusText || "Ocurrio un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>${err.status} : ${message}</b></p>`
        );
      }
    }
  }
});

dc.addEventListener("click", async (e) => {
  if (e.target.matches(".delete")) {
    $title.textContent = "Editar Santo";
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.idf.value = e.target.dataset.id;
    // alert("edit")
  }
  if (e.target.matches(".edit")) {
    // alert("delete")
    let isDelete = confirm(
      `¿Estas seguro de borrar el id ${e.target.dataset.id}`
    );
    if (isDelete) {
      try {
        let options = {
            method: "DELETE",
            headers: { "Content-type": "application/json; charset=utf-8" },
          },
          res = await fetch(
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
