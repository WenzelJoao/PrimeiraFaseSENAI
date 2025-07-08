const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const produtos = [
    { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
    { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
    { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
    { nome: "Meias", preco: 9.9, categoria: "Roupas" },
    { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];

console.log("");
console.log("Exercícios com numeros")
console.log("");



// 1. Filtrar números maiores que 10.

const numerosMaioresQueDez = numeros.filter(numeros => numeros > 10)
console.log(`1. Filtrar números maiores que 10.
    ${numerosMaioresQueDez}`);
console.log("");


// 2. Dobrar todos os números do array.

const numerosDobrados = numeros.map(numeros => numeros * 2)
console.log(`2. Dobrar todos os números do array.
    ${numerosDobrados}`)
console.log("");

// 3. Somar todos os números do array.

const numerosSomados = numeros.reduce((acumulador, valorTotal) => acumulador + valorTotal, 0)
console.log(`3. Somar todos os números do array.
    ${numerosSomados}`);
console.log("");

// 4. Encontrar o maior número.

const numeroMaior = Math.max(...numeros.map(valor => valor.valor))
console.log(`4. Encontrar o maior número.
    ${numeroMaior}`);
console.log("");

// 5. Encontrar o menor número.

const numeroMenor = Math.min(...numeros)
console.log(`5. Encontrar o menor número.
    ${numeroMenor}`);
console.log("");

// 6. Ordenar os números em ordem crescente.

const ordemCrecente = numeros.sort((acumulador, resultado) => acumulador - resultado)
console.log(`6. Ordenar os números em ordem crescente.
    ${ordemCrecente}`);
console.log("");

//7. Criar um novo array com apenas os números ímpares.

const impares = numeros.filter(numeros => numeros % 2 !== 0)
console.log(`7. Criar um novo array com apenas os números ímpares.
    ${impares}`);
console.log("");

// 8. Verificar se todos os números são maiores que 3.

const maiores3 = numeros.every(numeros => numeros > 3)
console.log(`8. Verificar se todos os números são maiores que 3.
    ${maiores3}`);
console.log("");

// 9. Verificar se existe algum número maior que 100.

const maior100 = numeros.some(numeros => numeros > 100)
console.log(`9. Verificar se existe algum número maior que 100.
    ${maior100}`);
console.log("");

//10. Retornar a média dos números.

const soma = numeros.reduce((acumulador, resultado) => acumulador + resultado, 0)
const calculoMedia = soma / numeros.length
console.log(`10. Retornar a média dos números.
    ${calculoMedia}`);
console.log("");

console.log("///////////////////////////////////////////////////");
console.log("");
console.log("Exercícios com nomes");
console.log("");

// 1. Ordenar os nomes em ordem alfabética.

const ordemAlfabetica = nomes.sort()
console.log(`1. Ordenar os nomes em ordem alfabética.
    ${ordemAlfabetica}`)
console.log("");

//2. Filtrar os nomes com mais de 5 letras

const nomes5Letras = nomes.filter((nomes) => nomes.length > 5)
console.log(`2. Filtrar os nomes com mais de 5 letras
    ${nomes5Letras}`);


//3. Transformar todos os nomes em letras minúsculas.

const minusculaPrimeiraLetra = nomes.map((palavra) => {
    const [primeira, ...resto] = palavra
    return primeira.toLowerCase() + resto.join('')
})
console.log("");

console.log(`3. Transformar todos os nomes em letras minúsculas.
    ${minusculaPrimeiraLetra}`)
console.log("");

//4. Verificar se algum nome começa com a letra “B”.

const letraB = nomes.some(nomes => nomes[0].toLowerCase() === "b")
console.log(`4. Verificar se algum nome começa com a letra “B”.
    ${letraB}`);
console.log("");

//5. Encontrar o nome “Daniel” no array.

const nomeDaniel = nomes.includes("Daniel")
console.log(`Encontrar o nome “Daniel” no array.
    ${nomeDaniel}`)
console.log("");

//6. Criar um array com a quantidade de letras de cada nome.

const quantidadeLetras = nomes.map(nome => `${nome} tem ${nome.length} letras`)
console.log(quantidadeLetras);
console.log("");

//7. Juntar todos os nomes em uma string separada por vírgula.

const separadaVirgula = nomes.join()
console.log(`7. Juntar todos os nomes em uma string separada por vírgula.
    ${separadaVirgula}`);
console.log("");

console.log("///////////////////////////////////////////////////");
console.log("");
console.log("Exercícios com produtos");
console.log("");

//1. Filtrar os produtos da categoria “Eletrônicos”

const filtrarEletronicos = produtos.filter(produto => produto.categoria === "Eletrônicos")
console.log("1. Filtrar os produtos da categoria “Eletrônicos”")
console.log(filtrarEletronicos);
console.log("");

//2. Criar um array apenas com os nomes dos produtos.

const nomeProdutos = produtos.map(produto => produto.nome)
console.log(`2. Criar um array apenas com os nomes dos produtos.
    ${nomeProdutos}`);
console.log("");

//3.Criar um array com os preços com desconto de 10%.

const descontoProduto = produtos.map(produto => `${produto.nome}: ${produto.preco * 0.9}`)
console.log(`3.Criar um array com os preços com desconto de 10%.
    ${descontoProduto}`);
console.log("");

//4. Calcular o valor total de todos os produtos

const valorTotalProdutos = produtos.reduce((acumulador, resultado) => acumulador + resultado.preco, 0)
console.log(valorTotalProdutos)
console.log("");

//5. Encontrar o produto mais caro. 

const produtoCaro = produtos.reduce((maisCaro, produto) => produto.preco > maisCaro.preco ? produto : maisCaro)
console.log("5. Encontrar o produto mais caro.")
console.log(produtoCaro);
console.log("");


//6. Ordenar os produtos do mais barato ao mais caro

const baratoAoCaro = [...produtos].sort((precoA, precoB) => precoA.preco - precoB.preco)
console.log("6. Ordenar os produtos do mais barato ao mais caro")
console.log(baratoAoCaro)
console.log("");

//7. Agrupar os produtos por categoria.

const Roupas = produtos.filter(produto => produto.categoria === "Roupas",)
const eletronicos = produtos.filter(produto => produto.categoria === "Eletrônicos")
const juntos = {
    Roupas: Roupas,
    Eletrônicos: eletronicos
}
console.log("7. Agrupar os produtos por categoria (bônus - mais avançado).")
console.log(juntos);
console.log("");

//8. Criar uma função que receba uma categoria e retorne os produtos dela.

// const categoria = prompt("Digite a categoria (Ex: Roupas ou Eletrônicos): ")
// const categoriaProdutos = produtos.filter(produto=> produto.categoria === categoria)
// console.log("Produtos encontrados:");
// console.table(categoriaProdutos);

//9. Criar um array com objetos apenas contendo nome e preço.

const criarArray = produtos.map(produtos => ({
    nome: produtos.nome,
    preco: produtos.preco
}))
console.log("9. Criar um array com objetos apenas contendo nome e preço.");
console.log(criarArray);
console.log("");

//10. Verificar se todos os produtos custam mais de R$ 5.

const produtosMaiores5 = produtos.some(produtos => produtos > 5)
console.log(`10. Verificar se todos os produtos custam mais de R$ 5.
    ${produtosMaiores5}`);






























































//4. Junte os arrays numeros e nomes em um único array.

// const juntarArray = numeros.concat(nomes)
// console.log(`4. Junte os arrays numeros e nomes em um único array.
//     ${juntarArray}`);
