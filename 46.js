//Este ejercicio abarca los ejercicios del numero 42 a 45
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

// Pedir el ID del registro a dar de baja
function darDeBajaRegistro() {
  rl.question('Ingrese el ID del registro a dar de baja: ', (id) => {
    // Leer el archivo de datos y filtrar los registros que no sean el que se quiere dar de baja
    const registros = fs.readFileSync(NOMBRE_ARCHIVO, 'utf-8')
      .trim()
      .split('\n')
      .filter((registro) => {
        const registroJson = JSON.parse(registro);
        return registroJson.ID !== id;
      });

    // Escribir los registros restantes al archivo de datos
    fs.writeFileSync(NOMBRE_ARCHIVO, registros.join('\n'));

    console.log('Registro dado de baja correctamente.');
    rl.close();
  });
}

function listarRegistrosPorEstado() {
  console.log('Listando registros por estado');

  rl.question('Ingrese el estado a buscar: ', (estado) => {
    // Crear stream de lectura del archivo de datos
    const stream = fs.createReadStream(NOMBRE_ARCHIVO, { encoding: 'utf8' });

    // Crear objeto de interfaz para leer el stream línea por línea
    const rlStream = readline.createInterface({
      input: stream,
      crlfDelay: Infinity,
    });

    // Recorrer las líneas del archivo de datos
    rlStream.on('line', (linea) => {
      try {
        const registro = JSON.parse(linea);
        if (registro.ESTADO === estado) {
          console.log(registro);
        }
      } catch (error) {
        console.error('Error al parsear el registro:', error);
      }
    });

    // Cuando se termina de leer el archivo, cerrar el stream y la interfaz de readline
    rlStream.on('close', () => {
      console.log('Listado de registros por estado finalizado.');
      rl.close();
    });
  });
}
function consultarRegistroPorId() {
  console.log('Consultando un registro en DATOS.DAT');

  rl.question('Ingrese el ID del registro a consultar: ', (id) => {
    // Leer el archivo de datos
    const registros = leerArchivoDatos();

    // Buscar el registro por su ID
    const registroEncontrado = registros.find((registro) => registro.ID === id);

    // Si se encontró el registro, mostrarlo en la consola
    if (registroEncontrado) {
      console.log('Registro encontrado:');
      console.log(registroEncontrado);
    } else {
      console.log('No se encontró un registro con ese ID.');
    }

    rl.close();
  });
}



const menu = [
  "1. Dar de alta el registro",
  "2. Dar de baja registro",
  "3. Listar registro por estado",
  "4. Consultar registro"
];

// Mostramos el menú al usuario
console.log("Selecciona una opción:");
menu.forEach(opcion => console.log(opcion));

// Pedimos al usuario que seleccione una opción
rl.question("Ingresa el número de la opción que deseas seleccionar:", opcionSeleccionada => {
  // Dependiendo de la opción seleccionada, realizamos una acción
  switch(opcionSeleccionada) {
    case "1":
      console.log("Has seleccionado la opción de dar de alta el registro.");
      function darDeAltaNuevoRegistro() {}
      break;
    case "2":
      console.log("Has seleccionado la opción de dar de baja el registro.");
      function darDeBajaRegistro() {}
      break;
    case "3":
      console.log("Has seleccionado la opción de listar registro por estado.");
      function listarRegistrosPorEstado() {}
      break;
    case "4":
      console.log("Has seleccionado la opción de consultar registro.");
      function consultarRegistroPorId() {}
      break;
    default:
      console.log("La opción seleccionada no es válida.");
  }
  rl.close();
});
