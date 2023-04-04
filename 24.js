//Comprobar si un numero mayor o igual que la unidad es primo
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Introduce un número mayor o igual a 1: ', numero => {
  if (numero < 1) {
    console.log('El número debe ser mayor o igual a 1');
    readline.close();
    return;
  }

  let esPrimo = true;

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }

  if (esPrimo) {
    console.log(`El número ${numero} es primo`);
  } else {
    console.log(`El número ${numero} no es primo`);
  }

  readline.close();
});
