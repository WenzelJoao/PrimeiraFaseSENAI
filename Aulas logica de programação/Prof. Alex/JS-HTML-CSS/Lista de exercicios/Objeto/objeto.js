// 1. Catálogo de Produtos

const catalogo = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Calça Jeans", preco: 120 },
  { nome: "Tênis", preco: 200 },
  { nome: "Boné", preco: 35 }
];


function buscarProduto() {
  const nome = document.getElementById("nomeProduto").value.trim()
  const produto = catalogo.find(produto => produto.nome.toLowerCase() === nome.toLowerCase())

  const resultado = document.getElementById("resultado")
  if (produto) {
    resultado.textContent = `Produto encontrado: ${produto.nome} - R$ ${produto.preco}`
  } else {
    resultado.textContent = "Produto não encontrado."
  }
}


// 2. Sistema de Biblioteca

const livro = {
  titulo: "Moby Dick",
  autor: "Herman Melville",
  emprestado: false,
}

const statusEl = document.getElementById("status")

function atualizarStatus() {
  if (livro.emprestado) {
    statusEl.textContent = "Status: Emprestado"
  } else {
    statusEl.textContent = "Status: Disponível"
  }
}

function emprestar() {
  if (!livro.emprestado) {
    livro.emprestado = true
    atualizarStatus()
  } else {
    alert("Este livro já está emprestado.")
  }
}

function devolver() {
  if (livro.emprestado) {
    livro.emprestado = false
    atualizarStatus()
  } else {
    alert("Este livro já está disponível.")
  }
}

// 3. Conversor de Temperatura

const conversor = {
  celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
  },
  fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
  }
};

function converterParaFahrenheit() {
  const celsius = parseFloat(document.getElementById("inputC").value)
  const fahrenheit = conversor.celsiusParaFahrenheit(celsius)
  document.getElementById("resultadoF").textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`
}

function converterParaCelsius() {
  const fahrenheit = parseFloat(document.getElementById("inputF").value)
  const celsius = conversor.fahrenheitParaCelsius(fahrenheit)
  document.getElementById("resultadoC").textContent = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`
}

// 4. Agenda de Contatos

const agendaContatos = {
  contatos: []
};

function adicionarContato(ag) {
  const nome = document.getElementById("nomeContato").value
  ag.contatos.push(nome)
  document.getElementById("nomeContato").value = ""
  listarContatos(ag)
}

function removerContato(ag) {
  const nome = document.getElementById("nomeRemover").value
  const index = ag.contatos.indexOf(nome);
  ag.contatos.splice(index, 1)
  document.getElementById("nomeRemover").value = "";
  listarContatos(ag)
}

function listarContatos(ag) {
  const ul = document.getElementById("listaContatos")
  ul.innerHTML = ""
  ag.contatos.forEach(nome => {
    const li = document.createElement("li");
    li.textContent = nome
    ul.appendChild(li)
  })
}

// 5. Relatório de Notas

const aluno = {
  nome: "João",
  notas: {
    matematica: 7,
    portugues: 8,
    historia: 6,
    ciencias: 9
  }
};


function calcularMedia(alunoObj) {
  const notas = Object.values(alunoObj.notas)
  const soma = notas.reduce((total, nota) => total + nota, 0)
  return soma / notas.length
}


function mostrarMedia() {
  const media = calcularMedia(aluno)
  const resultado2 = document.getElementById("resultado2")
  resultado2.textContent = "Aluno: " + aluno.nome + " | Média: " + media.toFixed(2)
}




// 6. Carrinho de Compras

const carrinho = {
  itens: []
};

function adicionarItem() {
  const nome = document.getElementById("nomeItem").value.trim()
  const quantidade = parseInt(document.getElementById("quantidadeItem").value)
  const valor = parseFloat(document.getElementById("valorItem").value)

  if (nome && quantidade > 0 && valor > 0) {
    carrinho.itens.push({ nome, quantidade, valor })
    atualizarLista()
    limparCampos()
  }
}


function removerItem() {
  const nome = document.getElementById("nomeItem").value.trim()
  const index = carrinho.itens.findIndex(item => item.nome === nome)
  if (index !== -1) {
    carrinho.itens.splice(index, 1)
    atualizarLista()
    limparCampos()
  }
}

function mostrarTotal() {
  let total = 0;
  for (let item of carrinho.itens) {
    total += item.quantidade * item.valor
  }
  document.getElementById("resultado1").textContent = "Total: R$ " + total.toFixed(2)
}

function atualizarLista() {
  const lista = document.getElementById("listaItens")
  lista.innerHTML = ""
  for (let item of carrinho.itens) {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - ${item.quantidade} x R$ ${item.valor.toFixed(2)}`
    lista.appendChild(li)
  }
}

function limparCampos() {
  document.getElementById("nomeItem").value = ""
  document.getElementById("quantidadeItem").value = ""
  document.getElementById("valorItem").value = ""
}

const alunos = [
  { nome: "João", media: 7.5 },
  { nome: "Ana", media: 5.9 },
  { nome: "Frederico", media: 6.1 },
  { nome: "Mariana", media: 4.8 },
  { nome: "Felipe", media: 8.0 }
];

function mostrarAprovados() {
  const aprovados = alunos
    .filter(aluno => aluno.media > 6)
    .map(aluno => aluno.nome)

  const lista = document.getElementById("listaAprovados");
  lista.innerHTML = ""

  aprovados.forEach(nome => {
    const li = document.createElement("li")
    li.textContent = nome
    lista.appendChild(li)
  });
}

// 8. Conversor de Moedas com Objeto

const moeda = {
  taxas: {
    USD: { BRL: 5.42, EUR: 0.85 },
    BRL: { USD: 0.19, EUR: 0.16 },
    EUR: { USD: 1.1, BRL: 6.2 }
  },
  converter(valor, de, para) {
    if (this.taxas[de] && this.taxas[de][para]) {
      return valor * this.taxas[de][para]
    } else {
      return null
    }
  }
};

function converterMoeda() {
  const valor = parseFloat(document.getElementById("valor").value)
  const de = document.getElementById("de").value.toUpperCase()
  const para = document.getElementById("para").value.toUpperCase()
  const resultado = moeda.converter(valor, de, para)

  document.getElementById("resultado-conversor").textContent =
    resultado !== null
      ? `Resultado: ${resultado.toFixed(2)} ${para}`
      : "Conversão não disponível.";
}


// 1. Banco com Múltiplas Contas

const contas = {
  Joao: 1000,
  Maria: 500
};

function atualizarSaldo() {
  document.getElementById('saldoJoao').textContent = contas.Joao
  document.getElementById('saldoMaria').textContent = contas.Maria
  const total = contas.Joao + contas.Maria
  document.getElementById('saldoTotal').textContent = total
}

function depositar(nome, valor) {
  contas[nome] += valor;
  atualizarSaldo()
}

function sacar(nome, valor) {
  if (contas[nome] >= valor) {
    contas[nome] -= valor
    atualizarSaldo()
  } else {
    alert('Saldo insuficiente para ' + nome);
  }
}

// 2. Sistema de Votação

const votos = {
  candidatos: {
    "João": 0,
    "Maria": 0,
    "Carlos": 0
  },

  votar(nome) {
    if (this.candidatos.hasOwnProperty(nome)) {
      this.candidatos[nome]++
    }
  },

  maisVotado() {
    let maxVotos = -1
    let vencedor = null
    for (const candidato in this.candidatos) {
      if (this.candidatos[candidato] > maxVotos) {
        maxVotos = this.candidatos[candidato]
        vencedor = candidato
      }
    }
    return vencedor;
  }
};

function atualizar() {
  const lista = document.getElementById('lista-votos')
  lista.innerHTML = ''
  for (const candidato in votos.candidatos) {
    const li = document.createElement('li')
    li.textContent = `${candidato}: ${votos.candidatos[candidato]} voto(s)`
    lista.appendChild(li)
  }
  const vencedor = votos.maisVotado()
  document.getElementById('mais-votado').textContent = vencedor || 'Nenhum ainda'
}

// 3. Agenda Semanal de Compromissos

const agenda = {
  segunda: [],
  terca: [],
  quarta: [],
  quinta: [],
  sexta: [],
  sabado: [],
  domingo: []
};

function adicionar() {
  const dia = document.getElementById('dia').value
  const compromisso = document.getElementById('compromisso').value.trim()
  if (compromisso) {
    agenda[dia].push(compromisso)
    alert('Compromisso adicionado!')
  }
  listar()
}

function remover() {
  const dia = document.getElementById('dia').value
  const compromisso = document.getElementById('compromisso').value.trim()
  const index = agenda[dia].indexOf(compromisso)
  if (index > -1) {
    agenda[dia].splice(index, 1)
    alert('Compromisso removido!')
  } else {
    alert('Compromisso não encontrado!')
  }
  listar();
}

function listar() {
  const dia = document.getElementById('dia').value
  const lista = document.getElementById('lista')
  lista.innerHTML = ''
  agenda[dia].forEach(c => {
    const li = document.createElement('li')
    li.textContent = c
    lista.appendChild(li)
  })
}


document.getElementById('dia').addEventListener('change', listar)

listar()

// 4. Gerador de Fichas de RPG
const personagens = []

function criarPersonagem(nome) {
  return {
    nome: nome,
    forca: Math.floor(Math.random() * 10) + 1,
    destreza: Math.floor(Math.random() * 10) + 1,
    vida: Math.floor(Math.random() * 100) + 1
  };
}

function criar() {
  const nome = document.getElementById('nome').value.trim()
  if (nome === '') {
    alert('Digite um nome!')
    return;
  }

  const personagem = criarPersonagem(nome);
  personagens.push(personagem)
  mostrarPersonagens()
  document.getElementById('nome').value = ''
}

function mostrarPersonagens() {
  const lista = document.getElementById('personagem')
  lista.innerHTML = ''

  personagens.forEach(p => {
    const li = document.createElement('li')
    li.textContent = `${p.nome} - Força: ${p.forca}, Destreza: ${p.destreza}, Vida: ${p.vida}`
    lista.appendChild(li)
  });
}


// 5. Validador de Formulário com Objeto

function validar() {
      const nomeValidacao = document.getElementById('nomeValidacao').value.trim()
      const email = document.getElementById('email').value
      const idade = parseInt(document.getElementById('idade').value)
      let msg = ''

      if (nomeValidacao.length < 2) {
        msg += 'Nome inválido. '
      }

      if (!email.includes('@') || !email.includes('.')) {
        msg += 'Email inválido. '
      }

      if (isNaN(idade) || idade < 0 || idade > 120) {
        msg += 'Idade inválida.'
      }

      if (msg === '') {
        msg = 'Tudo certo!'
      }

      document.getElementById('mensagem').textContent = msg
    }

    // 6. Sistema de Gestão de Projetos

    const projeto = {
      nome: "Meu Projeto",
      status: "em andamento",
      tarefas: [
        { nome: "Planejar", data: "2025-07-05", status: "pendente" },
        { nome: "Desenvolver", data: "2025-07-06", status: "em andamento" },
        { nome: "Testar", data: "2025-07-07", status: "pendente" }
      ],
      alterarStatus(nome, novoStatus) {
        const t = this.tarefas.find(t => t.nome === nome)
        if (t) t.status = novoStatus
      }
    }

    function mostrarTarefas() {
      const filtro = document.getElementById("filtro").value
      const lista = document.getElementById("listaTarefas")
      lista.innerHTML = ""

      projeto.tarefas.forEach(tarefa => {
        if (!filtro || tarefa.status === filtro) {
          const li = document.createElement("li")
          li.innerHTML = `
            ${tarefa.nome} - ${tarefa.data} - <strong>${tarefa.status}</strong>
            <button onclick="mudarStatus('${tarefa.nome}')">Mudar Status</button>
          `
          lista.appendChild(li)
        }
      });
    }

    function mudarStatus(nome) {
      const novoStatus = prompt("Digite o novo status (pendente, em andamento, concluída):")
      if (novoStatus) {
        projeto.alterarStatus(nome, novoStatus);
        mostrarTarefas();
      }
    }

    mostrarTarefas();

    // 7. Simulador de Jogo de Dados

     const jogoDeDados = {
      historico: [],

      rolarDados() {
        const dado1 = Math.floor(Math.random() * 6) + 1
        const dado2 = Math.floor(Math.random() * 6) + 1
        this.historico.push(dado1, dado2)
        document.getElementById("resultadoDados").innerText =
          `Você rolou: ${dado1} e ${dado2}`
      },

      mostrarHistorico() {
        const texto = this.historico.join(", ")
        document.getElementById("historico").innerText =
          `Histórico: ${texto}`
      },

      contarNumero(numero) {
        return this.historico.filter(n => n === numero).length
      }
    }

    function contarNumero() {
      const valor = parseInt(document.getElementById("numero").value)
      if (valor >= 1 && valor <= 6) {
        const total = jogoDeDados.contarNumero(valor)
        document.getElementById("resultadoDados").innerText =
          `O número ${valor} saiu ${total} vezes.`
      } else {
        document.getElementById("resultadoDados").innerText =
          "Digite um número entre 1 e 6."
      }
    }