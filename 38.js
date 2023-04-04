//Ordenar una matriz de M filas y N columnas por la primera columna
//utilizando el metodo SHELL (por insercion)
// Función que ordena una matriz de una sola columna utilizando el algoritmo de ordenación por inserción
// Crear una matriz de ejemplo
let matriz = [
  [4, 5, 6, 7],
  [3, 2, 9, 1],
  [8, 4, 2, 6],
  [7, 3, 1, 5]
];

// Función de ordenamiento utilizando el método Shell
function ordenarPorShell(matriz) {
  let n = matriz.length;
  let distancia = Math.floor(n / 2);
  while (distancia > 0) {
    for (let i = distancia; i < n; i++) {
      for (let j = i; j >= distancia && matriz[j - distancia][0] > matriz[j][0]; j -= distancia) {
        let temp = matriz[j][0];
        matriz[j][0] = matriz[j - distancia][0];
        matriz[j - distancia][0] = temp;
      }
    }
    distancia = Math.floor(distancia / 2);
  }
  return matriz;
}

// Llamar a la función de ordenamiento y mostrar la matriz ordenada
let matrizOrdenada = ordenarPorShell(matriz);
console.log(matrizOrdenada);
