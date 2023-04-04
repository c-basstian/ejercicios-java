//Introducir un numero menor de 5000 y pasarlo a un numero romano
const readline = require('readline');

// Función para convertir un número a su equivalente en números romanos
function convertirARomano(numero) {
  const romanos = [
    { valor: 1000, simbolo: 'M' },
    { valor: 900, simbolo: 'CM' },
    { valor: 500, simbolo: 'D' },
    { valor: 400, simbolo: 'CD' },
    { valor: 100, simbolo: 'C' },
    { valor: 90, simbolo: 'XC' },
    { valor: 50, simbolo: 'L' },
    { valor: 40, simbolo: 'XL' },
    { valor: 10, simbolo: 'X' },
    { valor: 9, simbolo: 'IX' },
    { valor: 5, simbolo: 'V' },
    { valor: 4, simbolo: 'IV' },
    { valor: 1, simbolo: 'I' },
  ];

  let resultado = '';

  for (let i = 0; i < romanos.length; i++) {
    while (numero >= romanos[i].valor) {
      resultado += romanos[i].simbolo;
      numero -= romanos[i].valor;
    }
  }

  return resultado;
}

// Crear la interfaz para leer el número desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Preguntar al usuario por el número
rl.question('Introduce un número menor a 5000: ', (numero) => {
  // Convertir el número a entero
  numero = parseInt(numero);

  // Verificar que el número es válido
  if (isNaN(numero) || numero < 1 || numero >= 5000) {
    console.log('Número inválido.');
  } else {
    // Convertir el número a su equivalente en números romanos
    const romano = convertirARomano(numero);

    // Imprimir el resultado
    console.log(`${numero} en números romanos es: ${romano}`);
  }

  // Cerrar la interfaz de lectura
  rl.close();
});
