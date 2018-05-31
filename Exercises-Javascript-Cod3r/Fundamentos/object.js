// Aula 34 - Objetos e funções

// Comportamento de objetos
console.log(typeof Object);// function
console.log(typeof new Object()); // object

// Comportamento de funções

function funcs() {}

console.log(typeof funcs); // function
console.log(typeof new funcs()); // Object

// Comportamento de classes

class Produto{};

console.log(typeof Produto); //function
console.log(typeof new Produto); //object
