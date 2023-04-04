//Una empresa guarda las ventas realizadas por sus tres representantes a lo largo de doce
//meses de sus cuatro productos, VENTAS( representante, mes, producto ). Queremos proyectar el
//total de ventas, TOTAL ( mes, producto ), para lo cual sumamos las ventas de cada producto de
//cada mes de todos los representantes. Imprimir toda la información
// Datos de ventas de los representantes
const ventas = [
  { representante: 'A', mes: 1, producto: 1, cantidad: 10 },
  { representante: 'A', mes: 2, producto: 2, cantidad: 5 },
  { representante: 'A', mes: 3, producto: 3, cantidad: 20 },
  { representante: 'A', mes: 4, producto: 4, cantidad: 15 },
  { representante: 'B', mes: 5, producto: 1, cantidad: 5 },
  { representante: 'B', mes: 6, producto: 2, cantidad: 10 },
  { representante: 'B', mes: 7, producto: 3, cantidad: 15 },
  { representante: 'B', mes: 8, producto: 4, cantidad: 25 },
  { representante: 'C', mes: 9, producto: 1, cantidad: 15 },
  { representante: 'C', mes: 10, producto: 2, cantidad: 5 },
  { representante: 'C', mes: 11, producto: 3, cantidad: 10 },
  { representante: 'C', mes: 12, producto: 4, cantidad: 20 },
  // ...datos de ventas para los demás meses del año
];

// Función para calcular las ventas totales por mes y producto
function calcularVentasTotales(ventas) {
  const ventasTotales = {};

  ventas.forEach((venta) => {
    const { mes, producto, cantidad } = venta;
    if (!ventasTotales[mes]) {
      ventasTotales[mes] = {};
    }
    if (!ventasTotales[mes][producto]) {
      ventasTotales[mes][producto] = 0;
    }
    ventasTotales[mes][producto] += cantidad;
  });

  return ventasTotales;
}

// Calcular las ventas totales
const ventasTotales = calcularVentasTotales(ventas);

// Imprimir toda la información
console.log('Ventas por representante:');
console.table(ventas);
console.log('Ventas totales por mes y producto:');
console.table(ventasTotales);
