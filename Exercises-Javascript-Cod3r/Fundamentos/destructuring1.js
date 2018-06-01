// Aula 38 - Operador de atribuição destructuring

const Pessoa =  {
  nome: 'Claudio',
  idade: 32,
  endereco: {
    logradouro:'Rua Nova',
    numero:300
  }
}

// Exemplos com o operador de atribuição destructuring
const {nome, idade} = Pessoa; // Retirando o atributo nome e idade do Object Pessoa
console.log(nome,idade);

const {nome: n, idade: i} = Pessoa; // Nomeando os destructuring que foram retirado do Object Pessoa
console.log(n,i);

// Fazendo um destructuring de um atributo que não existe ele retorna undefined

const {nome:nome1, sobrenome} = Pessoa;
console.log(n,sobrenome);

// Criando um novo atributo apartir de um destructuring

const { endereco: { logradouro: rua, numero: num, cep ='81200-000'}} = Pessoa;
console.log(rua,num,cep);

// Cuidado ao destruturar um dado que não existe como no exemplo a seguir

/* const { conta: {agencia,conta}} = Pessoa;
 *console.log(agencia,conta);
 */
