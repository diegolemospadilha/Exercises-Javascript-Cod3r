// Armazenando uma função dentro de uma variavel

const imprimirSoma = function (a=0,b=0) {
  console.log(`A soma entre ${a} e ${b} é igual a ${a+b}`);
}

imprimirSoma(102,33);

// Armazenando uma arrow function dentro de uma variavel

const subtracao = (a,b) => {
  return `A subtração entre ${a} e ${b} é igual a ${a-b} !`;
}

console.log(subtracao(10,5));

// Retorno implicito

const multiplicacao = (a,b) => `${a} x ${b} = ${a*b}`;
console.log(multiplicacao(2,10));

// return mais curto ainda

const imprimir = a => a;

console.log(imprimir("Hello World !!!"));
