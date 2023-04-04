//Hacer un programa que lea las calificaciones de un alumno en 10
//asignaturas, las almacene y calcule e imprima su media
const prompt = require('prompt-sync')();

let sum = 0;
for (let i = 1; i <= 10; i++) {
  const calif = parseFloat(prompt(`Ingresa la calificación ${i}: `));
  sum += calif;
}

const avg = sum / 10;
console.log(`La media de calificaciones es: ${avg}`);
