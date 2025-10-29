// 3. un archivo.js con el código funcional que refleje su nombre notas para tres materias el promedio de las materias y si aprobó o no aprobó con nota minima 3.5

let nota1 = 4.2;
let nota2 = 3.8;
let nota3 = 2.9;

let promedio = (nota1 + nota2 + nota3) / 3;

console.log("Notas:", nota1, nota2, nota3);
console.log("Promedio:", promedio);

// Verificar si aprobó o no
if (promedio >= 3.5) {
  console.log("Aprobado :)");
} else {
  console.log("Reprobo :(");
}

