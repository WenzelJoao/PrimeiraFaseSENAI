//1 Crie um novo array com as disciplinas que possuem mais de 7 caracteres, convertidas para letras
// maiúsculas e ordenadas.

const palavras = ["desenvolvimento", "web", "javascript", "lógica", "frontend"];

const maior = palavras.filter(palavra => palavra.length > 7).map(palavra =>palavra.toUpperCase()).sort()
console.log(maior);


// 2. Média dos alunos
//  Crie um array com objetos contendo nome e notas. Retorne a um novo array com nome e a média.

const alunos = [
  { nome: "Ana", notas: [8, 9, 10] },
  { nome: "Carlos", notas: [6, 7, 5] }
];

const alunosMedia = alunos.map(aluno =>{
    const nome = aluno.nome
    const media = aluno.notas.reduce((a,b) =>a+b) / aluno.notas.length
    return {
        nome: nome,
        media: media
    }
})
console.log(alunosMedia);


// 3. Cálculo de estoque (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● A partir do array abaixo, calcule o saldo final do estoque:

const transacoes = [
    {tipo: "entrada", valor:100 },
    {tipo: "saida", valor:60},
    {tipo:"entrada", valor:50},
    {tipo: "saida", valor:30}
]

const transacoesfinal = transacoes.reduce((acumulador, valorAtual) => {
return valorAtual.tipo === "entrada" ? acumulador + valorAtual.valor : acumulador - valorAtual.valor
}, 0) 
console.log(transacoesfinal);


// 4. Aplicar desconto em produtos (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie uma função que aplica 10% de desconto em produtos com valor > R$100

const produtos = [
    {nome: "cadeira", valor:150},
    {nome: "lapis", valor:5}
]

const desconto = produtos.map(produto => {
  return {
    nome: produto.nome,
    valor: produto.valor > 100 ? produto.valor * 0.9 : produto.valor
  };
});
console.log(desconto);

// 5. Verificações de dados
// ● Verifique se algum usuário está logado e se todos estão logados:

const usuarios = [
    {nome:"ana", logado: true},
    {nome:"lucas", logado: false},
    {nome:"beatriz", logado: true}
]

const algumLogado = usuarios.some(usuario => usuario.logado)
console.log(algumLogado);

const todosUsuariosLogado = usuarios.every(usuario => usuario.logado)
console.log(todosUsuariosLogado);


// 6. Função buscar produto 
// ● Crie uma função que busca um produto pelo nome:

const produtos2 = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Mouse", preco: 50 }
];

function buscarNome(nome, array){
  return array.find(produto => produto.nome === nome)
}
console.log(buscarNome("Mouse", produtos2));

// 7. Listar tarefas pendentes
// Filtre as tarefas não concluídas e liste com prefixo "Pendente: ...":

const tarefas = [
  { descricao: "Estudar JS", concluida: true },
  { descricao: "Fazer prova", concluida: false },
  { descricao: "Enviar projeto", concluida: false }
];

console.log(tarefas.map((tarefa)=>{
  if(tarefa.concluida === false){
    return "Pendente: " + tarefa.descricao
  } else return null
}).filter(tarefa => tarefa !== null));

