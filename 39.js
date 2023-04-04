//Crear una tabla de 3 paginas, 4 filas y 5 columnas
//donde el primer  elemento valga 1, el segundo 2, el tercero 3
//y asi sucecivamente
// Crear una tabla de 3 páginas, 4 filas y 5 columnas
let tabla = [];
let num = 1;

for (let i = 0; i < 3; i++) {
  let pagina = [];
  for (let j = 0; j < 4; j++) {
    let fila = [];
    for (let k = 0; k < 5; k++) {
      fila.push(num);
      num++;
    }
    pagina.push(fila);
  }
  tabla.push(pagina);
}

// Imprimir la tabla
for (let i = 0; i < tabla.length; i++) {
  console.log(`Página ${i+1}:`);
  for (let j = 0; j < tabla[i].length; j++) {
    console.log(`Fila ${j+1}: ${tabla[i][j].join('\t')}`);
  }
}
