
// 1. Filtro e transformação com ordenação

const palavras = ["desenvolvimento", "web", "javascript", "lógica", "frontend"];

const resultado = palavras
  .filter(palavra => palavra.length > 7)
  .map(palavra => palavra.toUpperCase())
  .sort();

console.log(resultado);
// Resultado: [ "DESENVOLVIMENTO", "JAVASCRIPT", "FRONTEND" ]


// 2. Média dos alunos

const alunos = [
  { nome: "Ana", notas: [8, 9, 10] },
  { nome: "Carlos", notas: [6, 7, 5] }
];

const medias = alunos.map(aluno => {
  const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
  const media = soma / aluno.notas.length;
  return { nome: aluno.nome, media: media.toFixed(2) }; // toFixed para deixar com 2 casas
});

console.log(medias);
// Resultado: [ { nome: "Ana", media: "9.00" }, { nome: "Carlos", media: "6.00" } ]


// 3. Cálculo de estoque

const transacoes = [
    {tipo: "entrada", valor:100 },
    {tipo: "saida", valor:60},
    {tipo:"entrada", valor:50},
    {tipo: "saida", valor:30}
]

const saldo = transacoes.reduce((acumulador, item) => {
    return item.tipo === "entrada" ? acumulador + item.valor : acumulador - item.valor
}, 0)

console.log(saldo);


// 4. Aplicar desconto em produtos

const produtos = [
    {nome: "cadeira", valor:150},
    {nome: "lapis", valor:5}
]

const desconto = produtos.map(produto => {
    return {
        nome: produto.nome,
        valorOriginal: produto.valor,
        valorDesconto: produto.valor > 100 * 0.9
    }
})
console.log(desconto);

// 5. Verificações de dados

const usuarios = [
    {nome:"ana", logado: true},
    {nome:"lucas", logado: false},
    {nome:"beatriz", logado: true}
]

const logado = usuarios.some(usuario => usuario.logado)
console.log(logado);

const todosLogados = usuarios.every(usuario => usuario.logado)
console.log(todosLogados);

// 6. Função buscar produto

const produtos2 = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Mouse", preco: 50 }
];

function buscarProduto(nome) {
  return produtos.find(produto => produto.nome.toLowerCase() === nome.toLowerCase());
}

console.log(buscarProduto("mouse"));  // { nome: "Mouse", preco: 50 }
console.log(buscarProduto("teclado")); // undefined (não achou)

// 7. Listar tarefas pendentes

const tarefas = [
  { descricao: "Estudar JS", concluida: true },
  { descricao: "Fazer prova", concluida: false },
  { descricao: "Enviar projeto", concluida: false }
];

const tarefasPendentes = tarefas
  .filter(tarefa => !tarefa.concluida)
  .map(tarefa => `Pendente: ${tarefa.descricao}`);

console.log(tarefasPendentes);
// Output: ["Pendente: Fazer prova", "Pendente: Enviar projeto"]




// Só a primeira letra maiúscula
const nomesCapitalizados = pessoas.map(p => ({
  nome: p.nome.charAt(0).toUpperCase() + p.nome.slice(1).toLowerCase()
}));



const pessoas = [
  { nome: "ana" },
  { nome: "joão" },
  { nome: "maria" }
];

// Tudo maiúsculo
// const nomesMaiusculos = pessoas.map(p => ({
//   nome: p.nome.toUpperCase()