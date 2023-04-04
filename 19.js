//Hacer un programa que simule el funcionamiento de un reloj digital
// y que permita ponerlo en hora
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let hora = 0;
let minutos = 0;
let segundos = 0;

// Función para mostrar la hora actual
function mostrarHora() {
  // Formatear la hora como una cadena de texto
  const horaStr = hora.toString().padStart(2, '0');
  const minutosStr = minutos.toString().padStart(2, '0');
  const segundosStr = segundos.toString().padStart(2, '0');

  // Imprimir la hora en la consola
  console.log(`${horaStr}:${minutosStr}:${segundosStr}`);

  // Actualizar la hora
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 60) {
      minutos = 0;
      hora++;
      if (hora === 24) {
        hora = 0;
      }
    }
  }
}

// Función para poner en hora
function ponerEnHora() {
  rl.question("Introduce la nueva hora (formato HH:MM:SS): ", (respuesta) => {
    const [nuevaHoraStr, nuevaMinutosStr, nuevaSegundosStr] = respuesta.split(":");
    const nuevaHoraNum = parseInt(nuevaHoraStr);
    const nuevaMinutosNum = parseInt(nuevaMinutosStr);
    const nuevaSegundosNum = parseInt(nuevaSegundosStr);

    // Validar que la hora sea correcta
    if (nuevaHoraNum < 0 || nuevaHoraNum > 23 ||
        nuevaMinutosNum < 0 || nuevaMinutosNum > 59 ||
        nuevaSegundosNum < 0 || nuevaSegundosNum > 59) {
      console.log("Hora inválida. Por favor introduce una hora en formato válido (HH:MM:SS)");
    } else {
      hora = nuevaHoraNum;
      minutos = nuevaMinutosNum;
      segundos = nuevaSegundosNum;
      console.log("Hora actualizada a:", respuesta);
    }
  });
}

// Ejecutar la función para mostrar la hora cada segundo
setInterval(mostrarHora, 1000);

// Ejecutar la función para poner en hora cuando el usuario lo solicite
setInterval(() => {
  rl.question("¿Quieres poner en hora el reloj? (S/N) ", (respuesta) => {
    if (respuesta.toLowerCase() === "s") {
      ponerEnHora();
    }
  });
}, 60000);
