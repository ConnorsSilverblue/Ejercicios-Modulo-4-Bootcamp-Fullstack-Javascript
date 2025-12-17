
function repetirPalabra() {
    let palabra = document.getElementById('inputPalabra').value;
    let veces = parseInt(document.getElementById('inputVeces').value);
    

    if (isNaN(veces)) return; 

    let resultado = (palabra + " ").repeat(veces);
    document.getElementById('resultado1').innerText = resultado;
}


function cambiarColor() {
    let color = document.getElementById('inputColor').value;
    document.getElementById('textoLorem').style.backgroundColor = color;
}


function calcular() {
    
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);

    let suma = n1 + n2;
    let resta = n1 - n2;
    let multi = n1 * n2;
    let divi = n1 / n2;
    let total = suma + resta + multi + divi;

    let mensaje = `
        Suma: ${suma}
        Resta: ${resta}
        Multiplicación: ${multi}
        División: ${divi}
        TOTAL SUMADO: ${total}
    `;
    
    document.getElementById('resultado3').innerText = mensaje;
}


function invertir() {
    let texto = document.getElementById('textoInvertir').value;
    let invertido = texto.split('').reverse().join('');
    document.getElementById('resultado4').innerText = invertido;
}