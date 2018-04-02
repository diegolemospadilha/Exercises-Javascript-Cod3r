// Alguns cuidados que devemos ter com números

console.log(77 / 0.000001); // 77000000
console.log(77 / 0); // Infinity, pro javascript quanto mais perto de zero mais o número vai aumentar, se aproximando assim do infinito.
console.log("10" + 2); // Irá concatenar a string 19 com o number 2. Retornando assim 102.
console.log(("10.2" + 2.5)); /* Com un numero de ponto flutuante dentro da string,
                                      Irá concatenar a string 10.2 com o number 2.5. Retornando assim
                                      uma string '10.22.5'
                             */
console.log(('show' * 2)); // Transformará isso em um number NaN
console.log(0.1 + 0.7); // Retornará um number 0.7999999999999999
//console.log(10.toString(2)); /* Não é possível gerar usar uma função de Number, utlizando um número literal
                                //(para isso deve ser colocando o número entre parenteses como nos exemplos abaixo)
                            // */
console.log((99.909).toString(2));
console.log((90.77855).toFixed(2));
