//Hacer un programa que imprima el mayor y el menor de una serie
//de cinco numeros que vamos introduciendo por teclado
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];
let mayor = 0;
let menor = 0;

rl.question('Introduce el primer número: ', (respuesta) => {
  numeros.push(parseInt(respuesta));
  mayor = numeros[0];
  menor = numeros[0];

  rl.question('Introduce el segundo número: ', (respuesta) => {
    numeros.push(parseInt(respuesta));

    if (numeros[1] > mayor) {
      mayor = numeros[1];
    } else if (numeros[1] < menor) {
      menor = numeros[1];
    }

    rl.question('Introduce el tercer número: ', (respuesta) => {
      numeros.push(parseInt(respuesta));

      if (numeros[2] > mayor) {
        mayor = numeros[2];
      } else if (numeros[2] < menor) {
        menor = numeros[2];
      }

      rl.question('Introduce el cuarto número: ', (respuesta) => {
        numeros.push(parseInt(respuesta));

        if (numeros[3] > mayor) {
          mayor = numeros[3];
        } else if (numeros[3] < menor) {
          menor = numeros[3];
        }

        rl.question('Introduce el quinto número: ', (respuesta) => {
          numeros.push(parseInt(respuesta));

          if (numeros[4] > mayor) {
            mayor = numeros[4];
          } else if (numeros[4] < menor) {
            menor = numeros[4];
          }

          console.log(`El mayor número es ${mayor} y el menor número es ${menor}.`);

          rl.close();
        });
      });
    });
  });
});
