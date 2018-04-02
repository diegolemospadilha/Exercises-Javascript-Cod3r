// Aula sobre o comportamento de variaveis booleanas em Javascript

let isAtive = true;

console.log(typeof isAtive); // Retornanado que a variável isAtive é do tipo booleana

// !! Nega uma variavel 2 vezes, convertendo-a para o formato boolean ( true or false)
// Alguns casos que a linguagem interpreta boolean como true
console.log("Os casos em que a interpretação é verdadeira!\n");
console.log(!!1); // Todos os inteiros positivos e negativos recebem true ( exceto o zero)
console.log(!!{zz:0, aa:99}); // Objeto vazio ou com propriedades inseridas retorna true
console.log(!![]); // Array vazio ou com conteudo inserido retorna true
console.log(!!'xxx'); // String com qualquer conteudo e true( até o 0 como string, por exemplo)
// Alguns casos que a linguagem interpreta boolean como false
console.log(!!Infinity); // Valor Infinito retorna true;
console.log("\nOs casos em que a interpretação é falsa!");
console.log(!!''); // String vazia retorna false
console.log(!!0); // 0 retorna false
console.log(!!null); // null retorna false
console.log(!!undefined); // undefined retorna false
console.log(!!NaN); // NaN ( Not a Number) retorna false
console.log(!!null || 0 || 'xxx'); //Operador ou lógico (||) também pode ser utilizado para retornar um valor padrão

// Exemplo prático

let name =''
console.log(name || 'Desconhecido');// Retorna 'Desconhecido' pois a variavel name esta vazia
name ='Taffarel da Silva'
console.log(name || 'Desconhecido'); // Retorna o conteúdo da variavel name que agora está preenchida

/* ou lógico no console.log utilizado para uma situação por exemplo em que a variavel name
 * não é oreenchida então ela retorna false (pois a está string vazia)
 * Muito utilizado para definir um retorno padrão, quando uma variavelnão é preenchida por exemplo.
 */
