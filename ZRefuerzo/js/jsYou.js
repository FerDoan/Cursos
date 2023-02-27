function sumar(a,b,...c) {
    let res = a + b;
    c.forEach(function(n){
        res += n
    });

    return res
}

console.log(sumar(1,2))
console.log(sumar(1,2,3))
console.log(sumar(1,2,3,4))

class Animal{
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    //Metodos
    sonar(){
        console.log("Hasdasdasd")
    }

    saludar(){
        console.log(`Hola ${this.nombre}`)
    }
}

class Perro extends Animal{
    constructor(nombre,genero, tamaño){
        super(nombre,genero);
        this.tamaño = tamaño;
    }

    sonar(){
        console.log("jkhgakgkhjahhgkaj")
    }

    ladra(){
        console.log("gua gua gua")
    }
}

const mimi = new Animal("mimi","hembra"),
        scooby = new Animal("aga","macho");

console.log(mimi);
console.log(scooby);

const set = new Set([1,2,3,4,5,true,false,false,{},{},"hola","HOla"]);
console.log(set)
// console.log(set,size)

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(false);
set2.add(true);
set2.add(true);
set2.add({});

console.log(set2);

let arr = Array.from(set);
console.log('arr',arr)

let mapa = new Map();
mapa.set("nombre","jon");
mapa.set("apellido","MirCha");

function cuadrado(v){
    setTimeout(() => {
        return console.log({v,res: v * v})
    },Math.random() * 1000);
}

function* generador(){
    console.log("Inicica Generador");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Termina Generador");
}

let gen = generador();

for(let y of gen){
    console.log(y)
}

const persona= {
    nombre: "",
    apellido:"",
    edad:0,
}

const manejador= {
    set(obj,prop,valor){
        obj[prop] = valor
    }
}

const jon = new Proxy(persona,manejador);
jon.nombre = "jon";
jon.apellido = "Mircha"
jon.edad = 35;
jon.twiitter= "@covra76"
console.log(jon);
console.log(persona);


//call llama directamente ala descripcion que este dentro de los objetos

console.log(JSON.parse("{}"))
console.log(JSON.parse("{}"))
console.log(JSON.parse("[1,2,3]"))

console.log(JSON.stringify({}))
console.log(JSON.parse("[1,2,3]"))
console.log(JSON.parse("[1,2,3]"))