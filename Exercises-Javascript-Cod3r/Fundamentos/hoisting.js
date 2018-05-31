/* Aula 33 - Hosting
 * Hosting = Comportamento padrão da Linguagem em javascriptem que ao compilar
 * o código joga(issa) todas as variaveis do tipo var para cima
 */

console.log("var a = ",a);
var a = 10;
console.log("var a = ",a);


// Já este conceito de hoisting não funciona para as variáveis fo tipo let
console.log(b);
let b = 88;
