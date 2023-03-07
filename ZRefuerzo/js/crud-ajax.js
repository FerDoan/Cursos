const d = document,
  $tableAj = d.querySelector(".crud-table-ajax"),
  $formAj = d.querySelector(".crud-form-ajax"),
  $titleAJ = d.querySelector(".crud-title-ajax"),
  $templateAj = d.getElementById("crud-template").content,
  $fragmentAJ = d.createDocumentFragment();
// Se crea el metodo ajax
const ajax = (options) => {
  let { url, method, success, error, data } = options;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
        let json = JSON.parse(xhr.responseText);
        success(json);

    } else {
      let message = xhr.statusText || "Ocurrio un error";
      error(`Error ${xhr.status}: ${message}`);

    }
    // console.log(xhr);
  });

  xhr.open(method || "GET", url);
  xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
  xhr.send(JSON.stringify(data));
};

// creamos el metodo para obtener todos los datos
const getAll = () =>{
    ajax({
        method:"GET",
        url:"http://localhost:3000/santos",
        success: (res) =>{
            console.log(res)

            res.map((r) =>{
                $templateAj.querySelector('.name').textContent = r.nombre;
                $templateAj.querySelector('.constellation').textContent = r.constelacion;
                $templateAj.querySelector(".edit").dataset.id = r.id
                $templateAj.querySelector(".delete").dataset.id = r.id
                $templateAj.querySelector(".delete").dataset.name = r.nombre
                $templateAj.querySelector(".delete").dataset.constellation = r.constelacion

                let $clone = d.importNode($templateAj,true)
                $fragmentAJ.appendChild($clone)
            });

            $tableAj.querySelector('tbody').appendChild($fragmentAJ)
        },
        error: (err) =>{
            console.log(err)
            $tableAj.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`);

        },
        data:null
    })
}

d.addEventListener("DOMContentLoaded",getAll);

d.addEventListener('submit',(e)=>{
    if (e.target === $formAj) {
        e.preventDefault();

        if (!e.target.idax.value) {
            //POST - CREATE
            ajax({
                method:"POST",
                url:"http://localhost:3000/santos",
                success: (res) => {},
                errror: (err) => {
                    $formAj.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`);

                },
                data:{
                    nombre:e.target.nombre.value,
                    constelacion:e.target.constelacion.value
                }
            })
        } else{
            //PUT- UPDTAE
            ajax({
                method:"PUT",
                url:`http://localhost:3000/santos/${e.target.idax.value}`,
                success: (res) => {},
                errror: (err) => {
                    $formAj.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`);

                },
                data:{
                    nombre:e.target.nombre.value,
                    constelacion:e.target.constelacion.value
                }
            })

        }

    }
})

d.addEventListener('click',e => {
    if (e.target.matches(".delete")) {
        $titleAJ.textContent = "Editar Santo";
        $formAj.nombre.value = e.target.dataset.name;
        $formAj.constelacion.value = e.target.dataset.constellation;
        $formAj.idax.value = e.target.dataset.id;
        // alert("edit")
    }
    if (e.target.matches(".edit")) {
        // alert("delete")
        let isDelete = confirm(`¿Estas seguro de borrar el id ${e.target.dataset.id}`);
        if(isDelete){
        ajax({
            method:"DELETE",
            url:`http://localhost:3000/santos/${e.target.dataset.id}`,
            success: (res) => {},
            errror: (err) => {
                $formAj.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`);

            },
            // data:{
            //     nombre:e.target.nombre.value,
            //     constelacion:e.target.constelacion.value
            // }
        })
    }
    }
})