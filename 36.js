//Generar una matriz de 4 filas y 5 columnas con numeros aleatorios
//entre 1 y 100, y hacer su matriz transpuesta
// Generar matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100
let matriz = [];
for (let i = 0; i < 4; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    matriz[i][j] = Math.floor(Math.random() * 100) + 1;
  }
}

// Imprimir matriz original
console.log("Matriz original:");
for (let i = 0; i < 4; i++) {
  let fila = "";
  for (let j = 0; j < 5; j++) {
    fila += matriz[i][j] + " ";
  }
  console.log(fila);
}

// Generar matriz transpuesta
let matrizTranspuesta = [];
for (let i = 0; i < 5; i++) {
  matrizTranspuesta[i] = [];
  for (let j = 0; j < 4; j++) {
    matrizTranspuesta[i][j] = matriz[j][i];
  }
}

// Imprimir matriz transpuesta
console.log("Matriz transpuesta:");
for (let i = 0; i < 5; i++) {
  let fila = "";
  for (let j = 0; j < 4; j++) {
    fila += matrizTranspuesta[i][j] + " ";
  }
  console.log(fila);
}
