function lanzarMoneda() {
  // Generar un número aleatorio entre 0 y 1
  const numAleatorio = Math.floor(Math.random() * 2);

  // Si el número es 0, es cara, de lo contrario es cruz
  if (numAleatorio === 0) {
    console.log("Cara");
  } else {
    console.log("Cruz");
  }
}

// Ejecutar la función para lanzar la moneda
lanzarMoneda();
