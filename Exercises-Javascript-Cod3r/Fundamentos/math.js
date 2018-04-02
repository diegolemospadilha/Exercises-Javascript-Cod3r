// Codigo para calculo de area de um circulo utilizando a boblioteca Math

let raio = 5.6,
    area = (Math.PI * Math.pow(raio, 2)).toFixed(3);

/* Math.PI  = Constante com o valor de PI.
   Math.pow() = função para calculo de potenciação, onde o primeiro parametro e valor a ser elevado.
    E o segundo parametro, por quanto o primeiro valor será elevado.
*/
console.log(area);
