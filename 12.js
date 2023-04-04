//Hacer un programa que imprima los numeros del 1 al 100 y que calcule
// la sumade todos los numeros pares por un lado y por otro, la de
//todos los impares
let sumaPares = 0;
let sumaImpares = 0;

for (let i = 1; i <= 100; i++) {
  console.log(i);

  if (i % 2 === 0) {
    sumaPares += i;
  } else {
    sumaImpares += i;
  }
}

console.log(`La suma de los números pares es ${sumaPares}`);
console.log(`La suma de los números impares es ${sumaImpares}`);
