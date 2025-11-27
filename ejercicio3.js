// Ejercicio 3
// Mostrar nombre, notas, promedio y si aprobó


const nombre = "Salome";

let nota1 = 4.2;
let nota2 = 3.8;
let nota3 = 2.9;

let promedio = (nota1 + nota2 + nota3) / 3;

console.log("Nombre:", nombre);
console.log("Notas:", nota1, nota2, nota3);
console.log("Promedio:", promedio.toFixed(2));

if (promedio >= 3.5) {
  console.log("Aprobó :)");
} else {
  console.log("Reprobó :(");
}



