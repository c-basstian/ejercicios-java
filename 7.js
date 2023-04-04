//Introducir tantas frases como queramos y contarlas
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 0;

rl.on('SIGINT', () => {
  console.log(`Has introducido ${contador} frase(s).`);
  process.exit();
});

function pedirFrase() {
  rl.question('Introduce una frase (o presiona Ctrl+C para salir): ', (frase) => {
    contador++;
    pedirFrase();
  });
}

pedirFrase();
