//Hacer un programa que nos permita dar altas en el archivo DATOS.DAT, cuyos campos son:
//ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO.
// Importar módulo fs y readline
const fs = require('fs');
const readline = require('readline');

// Definir el nombre del archivo de datos
const NOMBRE_ARCHIVO = 'DATOS.DAT';

// Definir los campos de cada registro
const campos = ['ID', 'NOMBRE', 'APELLIDOS', 'DIRECCIÓN', 'ESTADO'];

// Crear instancia de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para pedir los datos del nuevo registro
function pedirDatosNuevoRegistro() {
  return new Promise((resolve) => {
    const nuevoRegistro = {};
    let campoActual = 0;

    // Función recursiva para pedir los datos del nuevo registro
    function pedirCampo() {
      rl.question(`Ingrese ${campos[campoActual]}: `, (respuesta) => {
        nuevoRegistro[campos[campoActual]] = respuesta;
        campoActual++;

        if (campoActual === campos.length) {
          // Si se ingresaron todos los datos, resolver la promesa
          resolve(nuevoRegistro);
        } else {
          // Si no se ingresaron todos los datos, pedir el siguiente campo
          pedirCampo();
        }
      });
    }

    // Comenzar a pedir los datos del nuevo registro
    pedirCampo();
  });
}

// Función para dar de alta un nuevo registro
function darDeAltaNuevoRegistro() {
  console.log('Dando de alta un nuevo registro en DATOS.DAT');

  // Pedir los datos del nuevo registro
  pedirDatosNuevoRegistro()
    .then((nuevoRegistro) => {
      // Agregar el nuevo registro al archivo de datos
      fs.appendFileSync(NOMBRE_ARCHIVO, JSON.stringify(nuevoRegistro) + '\n');

      console.log('Registro agregado correctamente.');
      rl.close();
    })
    .catch((error) => {
      console.error('Error al agregar el registro:', error);
      rl.close();
    });
}

// Llamar a la función para dar de alta un nuevo registro
darDeAltaNuevoRegistro();
