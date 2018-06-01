// Aula 35 - Nome e valor

const number = 100;

function printNumber(){
  const number = 23;
  return number;
}


/* Atribuição para a var number não é permitida pois uma constante, na qual não pode haver
 * nenhuma alteração posterior já foi declarada
 */

// var number = 808;

console.log(number); // Imprimirá a const global
console.log(printNumber()); // Imprimira a const number da função printNumber()
