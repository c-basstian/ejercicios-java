//Hacer un programa que cuente las veces que aparece una determinda letra
// en una frase que introduciremos por teclado
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Introduce una frase: ", function (frase) {
  rl.question("Introduce una letra para buscar: ", function (letra) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
      if (frase[i] === letra) {
        contador++;
      }
    }
    console.log(
      `La letra "${letra}" aparece ${contador} veces en la frase "${frase}"`
    );
    rl.close();
  });
});
