const numeros = [ 
{ id: 1, valor: 10 }, 
{ id: 2, valor: 25 }, 
{ id: 3, valor: 8 }, 
{ id: 4, valor: 32 }, 
{ id: 5, valor: 18 } 
]; 
const nomes = [ 
{ id: 1, nome: "Alice" }, 
{ id: 2, nome: "Bruno" }, 
{ id: 3, nome: "Carla" }, 
{ id: 4, nome: "Daniel" }, 
{ id: 5, nome: "Elaine" } 
]; 


// Soma total dos valores do array numeros 
// Crie uma função que retorne a soma de todos os valores contidos nas propriedades valor. 

const somaTotal = numeros.reduce((acumulador, valorTotal) => acumulador + valorTotal.valor, 0 )
console.log(somaTotal);


// Filtrar números maiores que 15 
// Retorne um novo array apenas com os objetos do array numeros cujo valor seja maior que 
// 15. 

const numeros15 = numeros.filter(numeros => numeros.valor > 15)
console.log(numeros15);

// Obter nomes em ordem alfabética 
// Crie uma função que retorne um array de nomes (strings) em ordem alfabética. 

const ordem = nomes.map(p => p.nome).sort()
console.log(ordem);



// Juntar nomes e números pelo id 
// Crie um novo array de objetos com a seguinte estrutura: 
// { id: 1, nome: "Alice", valor: 10 }


// Encontrar o maior valor no array numeros 
// Escreva uma função que retorne o objeto com o maior valor. 

const maior = numeros.reduce((maior, atual) => atual.valor > maior.valor ? atual : maior)
console.log(maior);
