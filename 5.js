//Hacer un programa que imprima los numeros impares hasta el 100
//y que imprima cuantos impares hay
let contadorImpares = 0;

for (let i = 1; i <= 100; i += 2) {
  console.log(i);
  contadorImpares++;
}

console.log("Hay " + contadorImpares + " números impares.");
