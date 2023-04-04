//Simular cien tiradas de dos dados y contar las veces que entre los dos suman
//10
let contador = 0;

for (let i = 0; i < 100; i++) {
  // Lanzar dos dados aleatorios
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  // Calcular la suma de los dos dados
  const suma = dado1 + dado2;

  // Incrementar el contador si la suma es 10
  if (suma === 10) {
    contador++;
  }
}

console.log(`El número de veces que los dos dados suman 10 es: ${contador}`);
