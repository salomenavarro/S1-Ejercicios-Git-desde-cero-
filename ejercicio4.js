// Ejercicio 4
// Listar los números pares e impares del 1 al 30

let pares = [];
let impares = [];

for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  } else {
    impares.push(i);
  }
}

console.log("Números pares:", pares.join(", "));
console.log("Números impares:", impares.join(", "));
