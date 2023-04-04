//Calcular el factorial de un numero mediante funciones
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definimos una función para calcular el factorial de un número
function factorial(num) {
  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

// Pedimos al usuario que introduzca un número
rl.question('Introduce un número para calcular su factorial: ', (num) => {
  // Convertimos el número introducido a un valor numérico
  num = parseInt(num);

  // Validamos que el número sea mayor o igual a cero
  if (num >= 0) {
    // Calculamos el factorial del número usando la función que definimos anteriormente
    const resultado = factorial(num);

    // Imprimimos el resultado
    console.log(`El factorial de ${num} es ${resultado}`);
  } else {
    console.log('El número introducido debe ser mayor o igual a cero');
  }

  rl.close();
});
