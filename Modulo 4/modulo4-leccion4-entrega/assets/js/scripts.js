
function validarNumero(callback) {
    let input = prompt("Por favor, ingresa un número:");
    
   let numero = parseFloat(input);

    if (!isNaN(numero)) {
       
        callback(`¡Éxito! El valor '${input}' es un número válido.`);
    } else {
    
        callback(`Error: El valor '${input}' NO es un número.`);
    }
}


function ejecutarEjercicio1() {

    validarNumero(alert);
}



function calcularYAvisarDespues(numero, callback) {
    let suma = 0;


    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) { 
            suma += i;
        }
    }

    console.log("Calculando... espera 5 segundos.");


    setTimeout(function() {
  
        callback(suma);
    }, 5000);
}

function mostrarResultadoEjercicio2(resultado) {
    console.log(`El valor de la sumatoria es ${resultado}. Este resultado se obtuvo hace 5 segundos.`);
    alert(`El valor de la sumatoria es ${resultado}. Este resultado se obtuvo hace 5 segundos.`);
}


function ejecutarEjercicio2() {
    let num = prompt("Ingresa un número para sumar sus impares:");
    calcularYAvisarDespues(parseInt(num), mostrarResultadoEjercicio2);
}



function calcularYAvisarDependiendo(numero, callback, callbackError) {
    let totalAcumulado = 0;


    for (let i = 1; i <= numero; i++) {
        let sumaParcial = 0;

        for (let j = 1; j <= i; j++) {
            sumaParcial += j;
        }
        totalAcumulado += sumaParcial;
    }

    console.log(`Resultado total calculado: ${totalAcumulado}`);

    if (totalAcumulado < 1000) {
        callback(numero, totalAcumulado);
    } else {
        callbackError(totalAcumulado);
    }
}


function confirmarExito(num, res) {
    alert(`Las sumatorias sucesivas de ${num} es ${res}`);
}

function reportarError(res) {
    alert(`El resultado es ${res}. El número sobrepasa el objetivo de la función (>= 1000).`);
}


function ejecutarEjercicio3() {
    let num = prompt("Ingresa un número para las sumatorias sucesivas:");

    calcularYAvisarDependiendo(parseInt(num), confirmarExito, reportarError);
}