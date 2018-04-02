// Aula 20 - Arrays

let valores = [7.7, 8.5, 99, 10.54];
console.log(valores[0], valores[3]); // Primeiro indice de um array é o indice zero
console.log(valores[5]); /* No momento aqui não há nenhum valor declarado dentro do indice 5
 do vetor valores. No entanto, ao rodar o código ele não gera erro. Pois a linguagem javascript é dinâmica.
 Neste caso ela retorna undefined
 */

 valores[8] = 'string'; /* Um vetor pode receber valores de todos os tipos em um mesmo array.
                         * No entanto, não é uma prática recomendada.
                         */
console.log(valores); /* Observe o comportamento dessa linha
                       * Entre 4 e 8 ele retorna <4 empty files > pois não há conteúdo
                       * entre esses valores, isso ocorre até a posiçã8 8 do vetor valores.
                       */
valores.push(100, null, true, false, {id:33}) // função  .push adiciona valores a partir do final do vetor
console.log(valores);
console.log(valores.pop()); //retorna e remove um valor apartir do último indice de um array.
console.log(valores); // Náo exibiu o ultimo indice do array {id:33}, pois foi removido na linha anterior;
delete valores[2] /* Deletando o conteudo de indice de um valor em uma determinada posição.
                   * ( Aṕos isso seu indice continua,no entanto o seu conteúdo é removido e ele fica undefined)
                  */
console.log(typeof valores);// Um array é do tipo object

console.log(valores.length);// Retorna o tamanho do array.
