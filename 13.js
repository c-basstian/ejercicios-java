//Imprimir y contar los numeros que son multiplos de 2 o 3 que hay
//entre 1 y 100
let contadorMultiplos2 = 0;
let contadorMultiplos3 = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    console.log(i);
    if (i % 2 === 0) {
      contadorMultiplos2++;
    }
    if (i % 3 === 0) {
      contadorMultiplos3++;
    }
  }
}

console.log(`Hay ${contadorMultiplos2} múltiplos de 2 y ${contadorMultiplos3} múltiplos de 3 entre 1 y 100.`);
