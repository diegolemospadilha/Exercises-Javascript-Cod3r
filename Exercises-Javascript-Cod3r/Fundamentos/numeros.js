// Aula Utilizando números em Javascript

let number1 = 12.5;
let number2 = Number("5.0");

console.log(`${number1} é do tipo ${typeof number1}!`);
console.log(`${number2} é do tipo ${typeof number2}!`);

console.log(Number.isInteger(number1)); // Verificando se a variável number1 é inteiro ou não.
console.log(Number.isInteger(number2)); // Verificando se a variável number2 é inteiro ou não.

let nota1 = 7.575;
let nota2 = 9.985;

let total = ((nota1 * 6.0) + (nota2 * 4.0));
    media = total / (6.0 + 4.0);

console.log(`Sua nota final é igual a ${media.toFixed(2)}`); // Função toFixed = Faz a limitação da quantidade de casa decimais de uma variável
console.log(number1.toString(2)); /* função toString(2) = Utilizada para retornar seu número em binário
                                  * função toString(8) = Utilizada para retornar seu número em octal
                                  * função toString(16) = Utilizada para retornar seu número em hexadecimal
                                  */

console.log(typeof number1);
