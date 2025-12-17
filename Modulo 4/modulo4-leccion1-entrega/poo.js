

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    detalle: function() {
        console.log(`Auto: ${this.marca} ${this.modelo}, Año: ${this.año}`);
    }
};

auto.detalle();



function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre}`);
};

const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("Ana", 25);

persona1.saludar();
persona2.saludar();


class Mamifero {
    constructor(nombre, edad, esDomestico) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDomestico = esDomestico;
    }

    emitirSonido() {
        console.log("Sonido de mamífero");
    }
}


class Perro extends Mamifero {
    emitirSonido() {
        console.log("Guau");
    }
}


class Gato extends Mamifero {
    emitirSonido() {
        console.log("Miau");
    }
}


function hacerSonar(animal) {
    animal.emitirSonido();
}


const miPerro = new Perro("Firulais", 5, true);
const miGato = new Gato("Michi", 3, true);


hacerSonar(miPerro); 
hacerSonar(miGato); 


const estudiantes = [
    {
        "nombre": "Pedro",
        "edad": 20,
        "curso": "Fullstack"
    },
    {
        "nombre": "Maria",
        "edad": 22,
        "curso": "Python"
    },
    {
        "nombre": "Luis",
        "edad": 21,
        "curso": "Data Science"
    }
];


console.log(estudiantes);


console.log("El segundo estudiante es: " + estudiantes[1].nombre);
