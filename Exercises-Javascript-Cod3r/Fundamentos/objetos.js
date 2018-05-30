// Aula 21 - Objects

// Objects =  São conjuntos de coleções de pares chaves e valores

const prod1 = {} // Declaração de um objeto vazio

prod1.name = 'IPhone X'; // Criando uma propriedade name dentro do obj prod1 que recebe o valor IPhone X7
prod1.price = 4899.89;
prod1['DescontãoMaroto'] = 0.40; // Outra forma de atribuir uma propriedade a um objeto

console.log(prod1);

// Atribuição padrão de objeto

const prod2 = {
  name: 'Camisa Coritiba',
  price: 219.99
}

console.log(prod2);
