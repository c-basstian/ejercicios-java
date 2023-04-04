//Introducir una frase por teclado e imprimirla en el centro de la pantalla
const center = require('terminal-center');

// Pedir al usuario que introduzca una frase
const frase = prompt("Introduce una frase: ");

// Imprimir la frase centrada en la pantalla
console.log(center(frase));
