//Hacer un programa que nos permita introducir un numero por teclado
//y sobre el se realicen las siguientes operaciones: comprobar si es
//primo, hallar su factorial o imprimir su tabla de multiplicar.
const prompt = require('prompt-sync')();

// Función para comprobar si un número es primo
function esPrimo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Función para calcular el factorial de un número
function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Función para imprimir la tabla de multiplicar de un número
function tablaMultiplicar(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num*i}`);
  }
}

// Pedir al usuario que ingrese un número
const num = parseInt(prompt("Ingrese un número: "));

// Mostrar un menú con las opciones disponibles
console.log("Seleccione una opción:");
console.log("1. Comprobar si el número es primo");
console.log("2. Calcular el factorial del número");
console.log("3. Imprimir la tabla de multiplicar del número");
const opcion = parseInt(prompt("Opción seleccionada: "));

// Ejecutar la opción seleccionada por el usuario
switch (opcion) {
  case 1:
    if (esPrimo(num)) {
      console.log(`${num} es primo.`);
    } else {
      console.log(`${num} no es primo.`);
    }
    break;
  case 2:
    console.log(`El factorial de ${num} es ${factorial(num)}.`);
    break;
  case 3:
    tablaMultiplicar(num);
    break;
  default:
    console.log("Opción inválida.");
    break;
}
