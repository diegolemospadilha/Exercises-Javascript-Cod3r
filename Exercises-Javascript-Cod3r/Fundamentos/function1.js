// função sem retorno
function sum(a=0,b=0) { // Atribuindo valores padrão para caso, não sejam passado algum desses parametros da função
  console.log(`A soma entre ${a} e ${b} é igual a ${a+b} !`);
}

sum(2,5);
sum();
// function com retorno

function multiplicacao(a=0,b=0){
  return `${a} X ${b} = ${a*b}`;
}

console.log(multiplicacao(9,2));
