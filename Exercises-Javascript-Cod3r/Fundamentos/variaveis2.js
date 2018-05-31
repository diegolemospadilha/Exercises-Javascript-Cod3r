/* Aula 27  - Uso de var e de let
 *
 * var = possui escopo global e de função somente.
 * let = Possui escopo global, de função e de blocos.
 */

 // Comportamento de var
var number = 10;
{
  var number = 99;
  console.log("Intern var= ", number);
}
console.log("Extern var= ", number);

// Comportamento de let
let number1 = 32;
{
  let number1 = 97;
  console.log("Intern let = ",number1);
}
console.log("Extern let = ",number1);
