//Introducir una frase por teclado. Imprimirla cinco veces en filas
//consecutivas, pero cada impresion ir desplazada cuatro columnas
//hacia la derecha
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
  // Imprimir la frase cinco veces
  for (let i = 0; i < 5; i++) {
    // Desplazar la impresión cuatro columnas hacia la derecha
    console.log(" ".repeat(4 * i) + frase);
  }

  rl.close();
});
