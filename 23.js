// Hacer un programa que imprima los numeros del 0 al 100, controlando
//las filas y las columnas
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 9; j++) {
    const num = i * 10 + j;
    process.stdout.write(num.toString().padStart(3, ' '));
  }
  console.log();
}
