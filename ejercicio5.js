// Ejercicio 5 (Node.js)
// Determinar si un número digitado es par o impar

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite un número: ", (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("Ingrese un número válido.");
  } else if (numero % 2 === 0) {
    console.log("El número es par.");
  } else {
    console.log("El número es impar.");
  }

  rl.close();
});

