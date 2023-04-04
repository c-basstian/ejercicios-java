//Realizar la tabla de multiplicar de un numero entre 0 y 10
for (let i = 1; i <= 10; i++) {
  console.log(`Tabla del ${i}:`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log(""); // Separar las tablas con una línea en blanco
}
