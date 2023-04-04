//Imprimir y contar los multiplos de 3 desde el uno hasta un numero que
//introducimos por teclado
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (numero) => {
  let contador = 0;
  console.log(`Los múltiplos de 3 desde el 1 hasta ${numero} son:`);
  for (let i = 1; i <= numero; i++) {
    if (i % 3 === 0) {
      contador++;
      console.log(i);
    }
  }
  console.log(`En total hay ${contador} múltiplos de 3`);
  rl.close();
});
