//Imprimir,contar y sumar los multiplos de 2 que hay entre una serie
// de numeros, tal que el segundo sea mayor o igual que el primero.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer número: ', (num1) => {
  rl.question('Introduce el segundo número: ', (num2) => {
    let count = 0;
    let sum = 0;

    if (num1 > num2) {
      const temp = num1;
      num1 = num2;
      num2 = temp;
    }

    for (let i = num1; i <= num2; i++) {
      if (i % 2 === 0) {
        console.log(i);
        count++;
        sum += i;
      }
    }

    console.log(`Entre ${num1} y ${num2} hay ${count} múltiplos de 2.`);
    console.log(`La suma de los múltiplos de 2 es: ${sum}`);

    rl.close();
  });
});
