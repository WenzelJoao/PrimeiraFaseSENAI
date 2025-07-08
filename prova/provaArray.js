// 1. Filtro e transformação com ordenação
const palavras = ["desenvolvimento", "web", "javascript", "logica", "frontend"]
const questao1 = palavras.filter(palavra => palavra.length > 7).map(palavra => palavra.toUpperCase()).sort();
console.log(questao1);
console.log("-------------------------------------------");


// 2. Média dos alunos
// // // Crie um array com objetos contendo nome e notas. Retorne a um novo array com nome e a média.

const alunos = [
    {nome: "ana", notas: [8,9,10]},
    {nome: "carlos", notas:[ 6,7,5]}
]
const medias = alunos.map(aluno => {
  const soma = aluno.notas.reduce((total, nota) => total + nota, 0)
  const media = soma / aluno.notas.length
  return {
    nome: aluno.nome,
    media: media
  }
})
console.log(medias)
console.log("-------------------------------------------");



const transacoes = [
    {tipo: "entrada", valor:100 },
    {tipo: "saida", valor:60},
    {tipo:"entrada", valor:50},
    {tipo: "saida", valor:30}
]

const aaa = transacoes.filter(entradas=> entradas.tipo === "saida")
console.log(aaa);
const aaaa = transacoes.map(aa=> `${aa.tipo}: ${aa.valor === "saida"}`)
console.log(aaaa);
const valorentrada = transacoes.reduce((acumulador,valor)=> acumulador + valor.valor, 0 )
console.log(valorentrada);
const valorComSaida = transacoes.map(transacoes => transacoes.tipo === "saida" )
console.log(valorComSaida);


// // 4.

const produtos = [
    {nome: "cadeira", valor:150},
    {nome: "lapis", valor:5}
]

const descontoProduto = produtos.map(produto => `${produto.nome}: ${produto.valor * 0.9}`)
console.log(descontoProduto);
console.log("-------------------------------------------");


// 5. Verificações de dados

const usuarios = [
    {nome:"ana", logado: true},
    {nome:"lucas", logado: false},
    {nome:"beatriz", logado: true}
]

const usuarioLogado = usuarios.filter(usuario=> usuario.logado === true)
console.log(usuarioLogado);
const verificarUsuario = usuarios.some(usuarioss=> usuarioss.logado === "true")
console.log(verificarUsuario);
console.log("-------------------------------------------");

// 6. Função buscar produto 

const produtoss = [
    {nome: "notebook", preco: 3000},
    {nome: "mouse", preco: 50}
]

const nomeProd = prompt("Digite o produto: ")
const nomeProduto = produtoss.filter(produto=> produto.nome === nome)
console.table(nomeProduto);



