//Hacer un programa que solo nos permita introducir S o N
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirSN() {
  rl.question('Introduce "S" o "N": ', (respuesta) => {
    if (respuesta.toUpperCase() === 'S' || respuesta.toUpperCase() === 'N') {
      console.log(`Respuesta válida: ${respuesta}`);
      rl.close();
    } else {
      console.log('Respuesta inválida. Inténtalo de nuevo.');
      pedirSN();
    }
  });
}

pedirSN();
