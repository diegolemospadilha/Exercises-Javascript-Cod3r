// Aula 31 - Usando var e let em loops

// Comportamento de var em loops
const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  })
}

funcs[0](); //10
funcs[7](); //10

// Comportamento de let em loops
const funcsLet = [];

for (let j = 0; j < 10; j++) {
  funcsLet.push(function () {
    console.log(j);
  })
}

funcsLet[0](); //0
funcsLet[7](); //7
