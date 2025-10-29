// 4. un archivo.js con el código funcional    de números pares e impares que me arroje en consola el listado de los números pares e impares del 1 al 30

// paresImpares.js
// Lista los números pares e impares del 1 al 30

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
