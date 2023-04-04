//Usando el segundo ejemplo, hacer un programa que una nota en la lista
const prompt = require('prompt-sync')();

let notas = [];
let opcion = 0;

do {
  console.log('1. Agregar nota');
  console.log('2. Mostrar notas');
  console.log('3. Calcular promedio');
  console.log('4. Salir');
  opcion = parseInt(prompt('Ingrese una opción: '));

  switch (opcion) {
    case 1:
      let nuevaNota = parseFloat(prompt('Ingrese una nota: '));
      notas.push(nuevaNota);
      console.log(`La nota ${nuevaNota} ha sido agregada a la lista.`);
      break;
    case 2:
      console.log('Notas:');
      notas.forEach(nota => console.log(nota));
      break;
    case 3:
      if (notas.length > 0) {
        let suma = 0;
        notas.forEach(nota => suma += nota);
        let promedio = suma / notas.length;
        console.log(`El promedio de las notas es: ${promedio}`);
      } else {
        console.log('No hay notas ingresadas.');
      }
      break;
    case 4:
      console.log('Saliendo del programa...');
      break;
    default:
      console.log('Opción inválida. Intente de nuevo.');
      break;
  }
} while (opcion != 4);
