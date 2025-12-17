
var variableVar = "Soy una variable var";


let variableLet = "Soy una variable let";

const variableConst = "Soy una constante";

console.log("--- Variables ---");
console.log(variableVar, variableLet, variableConst);



function sumar(a, b) {
    return a + b;
}


const sumarFlecha = (a, b) => a + b;

console.log("\n--- Funciones Suma ---");
console.log("Suma tradicional:", sumar(5, 3));
console.log("Suma flecha:", sumarFlecha(5, 3));



const saludo = (nombre = "Invitado") => {
    console.log(`Hola, ${nombre}`);
};

console.log("\n--- Parámetros por defecto ---");
saludo("Estudiante"); 
saludo();            


console.log("\n--- Template Strings ---");
const nombre = "Alex";
const curso = "Desarrollo Web";


console.log(`Hola, mi nombre es ${nombre} y estoy en el curso de ${curso}.`);


console.log("\n--- Objetos y Destructuring ---");
const persona = {
    nombre: "Connors",
    edad: 36,
    curso: "Fullstack"
};


const { nombre: nombrePersona, edad, curso: cursoPersona } = persona;

console.log(nombrePersona, edad, cursoPersona);



const personaClon = { ...persona, edad: 29 }; 

console.log("Objeto original:", persona);
console.log("Objeto clonado (edad cambiada):", personaClon);



console.log("\n--- Clases y Herencia ---");

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log("Haciendo un sonido genérico...");
    }
}

class Perro extends Animal {
   
    hacerSonido() {
        console.log("¡Guau!");
    }
}


const miPerro = new Perro("Firulais");
miPerro.hacerSonido();



console.log("\n--- Promesas ---");


const esperarDosSegundos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promesa resuelta después de 2 segundos");
        }, 2000);
    });
};

esperarDosSegundos().then((mensaje) => {
    console.log("Usando .then():", mensaje);
});


const ejecutarAsync = async () => {
    try {
        const resultado = await esperarDosSegundos();
        console.log("Usando async/await:", resultado);
    } catch (error) {
        console.error(error);
    }
};

ejecutarAsync();