// Algumas funções para strings em Javascript

var nome = 'Curitiba';

console.log(nome.length); // Retorna o tamanho da String
console.log(nome.charAt(2));// Retorna o caracter na posição 2 da string nome que é r, pois o primeiro indice começa em zero.
console.log(nome.charCodeAt(0)); // Retorna o número do caracter na tabela ASC da letra C
console.log(nome.indexOf('i')); /* Retorna a posição do caracter i na String.
                                  no entanto retorna somente a posição da primeira string que a função encontrar caso haja
                                  mais de uma string repetida
                                */
console.log(nome.substring(4)); // Retorna uma nova string apartir do caracter indice 4 da string até o seu final.
console.log(nome.substring(2,6)); /* Retorna uma nova string apartir do caracter indice 2(incluido o caracter 2)
                                     até o caracter de indice ( não incluido o caracter 6 - inclui somente até o 5)
                                  */
console.log(nome + " é a capital do Paraná" + "!"); // Operador + utilizado para concatenação de strings em Javascript
console.log(nome.concat(' é a capital do Paraná !')); // concat() funcão para concatenação de strings
console.log(nome.replace(3,'O')); /* replace() = Primeiro parametro = posição do caracter a ser substituído
                                               = Segundo parametro = Novo caracter a  ser inserido na posição do primeiro parametro
                                  */
console.log("Ana, Maria, José, Jorge, Goku".split(/,/)); /* Usado para converter uma string em array
                                                            Parametro dentro da split = um Separadpr para os indices criados
                                                            que podem ser passados entre '', ou REGEX.
                                                          */
 let string = "Ana, Maria, José, Jorge, Goku".split(',');

 console.log(...string); // ... = Operador Spread utilizado para abrir um array, transformando seu indices em string
 
