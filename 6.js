//Hacer un programa que imprima todos los numeros naturales que hay
//desde el uno hasta un numero que se introduce por teclado
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (numeroLimite) => {
  for (let i = 1; i <= numeroLimite; i++) {
    console.log(i);
  }

  rl.close();
});
