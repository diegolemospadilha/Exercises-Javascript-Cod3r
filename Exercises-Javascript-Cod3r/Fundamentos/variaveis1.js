// Aula 26 - Declaração de variaveis com var

/* var sera = apesar de estar dentro de varios blocos esta variavel é global
 * pois este blocos não possuem relevância para o código.
 */
 
{
  {
    {
      { var sera = "Sera??"};
    }
  }
}

console.log(sera);

function teste() {
  var local = '1234'; // var de escopo local só existe dentro da função teste
  return local;
}

console.log(teste());
