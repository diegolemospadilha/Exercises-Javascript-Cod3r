for (var i = 0; i < 10; i++) {
  console.log(i);
}

/* var existe só existe dentro de escopo de função e global.
    Portanto quando uma var é declarado dentro de um laço de controle ou repetição
    é possível acessá-la de fora
 */
console.log("var i = ",i);

for (let j = 0; j < 10; j++) {
  console.log(j);
}

/* let existe somente dentro do laço for, ao tentar imprimir fora
 * o console retornará um erro.
 */

console.log("let j = ",j);
