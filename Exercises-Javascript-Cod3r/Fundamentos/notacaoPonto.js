// Aula 36 - Notação Ponto

/* Notação Ponto= utilizado para quando se deseja acessar um membro/atributo
   de uma variável, função ou objeto em Javascript
 */

console.log(typeof console); //object

console.log(Math.floor(9.7)); // Arrenddondamento para baixo

function Obj(nome) {
  this.nome = nome;
  this.funcs = function(){
    console.log("Executando atributo funcs do object Obj");
  }
}

const Obj2 = new Obj('Cadeira');
const Obj3 = new Obj('Carro');

// Exemplos de acesso a um objeto utilizando notação Ponto.
console.log(Obj2.nome);

Obj3.funcs();
