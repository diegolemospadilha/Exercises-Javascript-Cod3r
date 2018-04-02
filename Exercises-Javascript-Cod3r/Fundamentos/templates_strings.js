// Templates strings = Strings que usam `` e ${} para facilitar a concatenação de strings.

let name = 'Mario' + ' World'; // concatenação com sinal de + não aceita quebra de linha
console.log(` O nome do candidato é
             ${name} !!!`);
/* Exemplo acima de templates strings só para visualisar que ela respeita os espaços e quebras de linhas
inseridos dentro dela */

// Elas também aceitam expressões

console.log(`10 x 15 = ${10 * 15}`);

// Também aceitam funções

 let up  = (text) => text.toUpperCase();

console.log(`Ei... ${up('cuidado jovem')} !!!`);
