//Generar una matriz de 4 filas y 5 columnas con numeros aleatorios
//entre 1 y 100, e imprimirla
// Generar una matriz de 4 filas y 5 columnas con números aleatorios
let matriz = [];
for (let i = 0; i < 4; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    matriz[i][j] = Math.floor(Math.random() * 100) + 1;
  }
}

// Imprimir la matriz en la consola
console.log("Matriz generada:");
for (let i = 0; i < 4; i++) {
  console.log(matriz[i].join("\t"));
}
