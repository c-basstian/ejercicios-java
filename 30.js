//INtroducir dos numeros por teclado y mediante menu, calcule la suma
//su resta, su multiplicacion o su division
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funciones de operaciones
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

// Pedir al usuario que ingrese los dos números
readline.question('Ingresa el primer número: ', (num1) => {
  readline.question('Ingresa el segundo número: ', (num2) => {
    // Convertir los números ingresados en formato string a números
    const a = Number(num1);
    const b = Number(num2);

    // Mostrar el menú de opciones
    console.log('\nSeleccione una operación:');
    console.log('1. Suma');
    console.log('2. Resta');
    console.log('3. Multiplicación');
    console.log('4. División');

    // Leer la opción seleccionada por el usuario
    readline.question('Opción: ', (opcion) => {
      // Convertir la opción ingresada en formato string a número
      const operacion = Number(opcion);

      // Realizar la operación seleccionada por el usuario
      switch (operacion) {
        case 1:
          console.log(`La suma de ${a} y ${b} es: ${suma(a, b)}`);
          break;
        case 2:
          console.log(`La resta de ${a} y ${b} es: ${resta(a, b)}`);
          break;
        case 3:
          console.log(`La multiplicación de ${a} y ${b} es: ${multiplicacion(a, b)}`);
          break;
        case 4:
          console.log(`La división de ${a} y ${b} es: ${division(a, b)}`);
          break;
        default:
          console.log('Opción inválida');
          break;
      }

      // Cerrar la interfaz de lectura
      readline.close();
    });
  });
});
