//Cargar las notas de los alumnos de un colegio en funcion del
//numero de cursos y del numero de alumnos por curso
const prompt = require('prompt-sync')(); // Importar módulo prompt-sync

const numCursos = prompt('Introduce el número de cursos: ');
const numAlumnos = prompt('Introduce el número de alumnos por curso: ');

// Generar matriz de notas aleatorias
const notas = [];
for (let i = 0; i < numCursos; i++) {
  const curso = [];
  for (let j = 0; j < numAlumnos; j++) {
    const nota = Math.floor(Math.random() * 10) + 1; // Generar nota aleatoria entre 1 y 10
    curso.push(nota);
  }
  notas.push(curso);
}

console.log('Notas de los alumnos:');
console.log(notas); // Imprimir matriz de notas
