//Introducir dos numeros por teclado. Imprimir los numeros naturales
//que hay entre ambos numeros empezando por el mas pequeno, contar
//cuantos hay y cuantos de ellos son pares. Calcular la suma de los
//impares.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer número: ', (num1) => {
  rl.question('Introduce el segundo número: ', (num2) => {
    // Convertir los números a enteros
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    // Encontrar el número menor y mayor
    const menor = Math.min(num1, num2);
    const mayor = Math.max(num1, num2);

    // Contadores y suma de impares
    let contador = 0;
    let contadorPares = 0;
    let sumaImpares = 0;

    // Imprimir los números naturales entre el menor y el mayor
    for (let i = menor; i <= mayor; i++) {
      console.log(i);
      contador++;

      if (i % 2 === 0) {
        contadorPares++;
      } else {
        sumaImpares += i;
      }
    }

    // Imprimir resultados
    console.log(`Entre ${menor} y ${mayor} hay ${contador} números naturales.`);
    console.log(`De ellos, ${contadorPares} son pares y ${contador - contadorPares} son impares.`);
    console.log(`La suma de los impares es ${sumaImpares}.`);

    rl.close();
  });
});
