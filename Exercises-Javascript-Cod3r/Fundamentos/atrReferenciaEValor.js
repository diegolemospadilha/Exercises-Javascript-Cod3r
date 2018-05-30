const a = {name: 'Teste'}; // Variavel a recebe o endereço do objeto ( Atribuição por valor)

console.log(a);

const b = a; /* variavel b recebe o mesmo endereço que a variavel a
              * , isto aqui a atribuição é por referencia, quando houver uma alteração na variavel a, ocorrera
              *  esta ocorrera em b. Pois o objeto que ambas variaveis recebem não é um valor primitivo.
              */

b.name = "Update"; // Quando a variavel b recebe a mudançã de conteudo a variavel a também é alterada

console.log(a, b);

let c = 4;
let d = c; // Atribuição aqui ocorre por valor, pois a variavel recebe um valor primitivo.

d++; // Incrementando a variavel d ( Este incremento não é passado para a variavel C)
console.log(c);
console.log(d);
