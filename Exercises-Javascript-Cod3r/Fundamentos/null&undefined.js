// Aula 22 - Entendendo o NULL e o UNDEFINED

let produto =  {};
console.log(produto.preco); //  Recebe undefined pois NÃO FOI INICIALIZADA,mas foi declarado
console.log(!!produto.preco); // propriedade undefined retorna false;
produto.preco = null; /* NULL utilizada para quando deseja que a variavel não faca referência para nenhum
                    * endereço da memória
                    */

console.log(produto);
console.log(produto.preco);
console.log(!!produto.preco); // propriedade null retorna false;


// null deve ser atribuido quando se deseja zerar uma variavel em Javascript
