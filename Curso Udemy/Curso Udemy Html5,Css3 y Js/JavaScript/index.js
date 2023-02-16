//  var nombre = prompt("Ingresa nombre");

//  var edad = prompt("Ingresa edad");

//  alert("Tu nombre es "+ nombre + "Con la edad de " + edad)


 function resta(v1,v2) {
    let res = v1 - v2

    return res
}

document.write(resta(50,30))

var nuevo = document.createElement("a");

var texto = document.createTextNode("Enlace");

nuevo.appendChild(texto);

document.body.appendChild(nuevo);
document.getElementById("enlace").appendChild(nuevo)

nuevo.setAttribute("style","margin-bottom:20px;padding: 10px; background: black; color: white")

var lista = document.createElement("li");
var content = document.createTextNode("Elemnto 3");

lista.appendChild(content)

// 

var contenedor = document.getElementById("lista")
contenedor.appendChild(lista)


//

var pE = document.getElementById("n1");

pE.innerHTML = "E 1"