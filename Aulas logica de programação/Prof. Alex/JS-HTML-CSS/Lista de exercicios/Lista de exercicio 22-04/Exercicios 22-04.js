function Exercicio1() {
    //     Exercício 1 - Saudação Personalizada
    // Solicite ao usuário que digite seu nome usando prompt .
    // Exiba uma saudação personalizada no formato: "Olá, [nome]! Seja bemvindo!" usando alert .

    let nome = prompt("Digite seu nome:")
    alert(`Olá ${nome}! Seja bem vindo!`)

}

function Exercicio2() {
    //     Exercício 2 - Calculadora de Soma
    // Peça ao usuário para inserir dois números (você pode usar prompt para
    // pegar os valores como strings e depois convertê-los para números com
    // Number ).
    // Mostre o resultado da soma desses dois números usando alert .

    let numero1 = Number(prompt("Digite o primeiro numero:"))
    let numero2 = Number(prompt("Digite o segundo numero:"))
    let soma = numero1 + numero2

    alert(`O resultado da soma entre ${numero1} e ${numero2} é: ${soma}`)
}

function Exercicio3() {
    //     Exercício 3 - Conversão de Temperatura (Celsius para Fahrenheit)
    // Solicite ao usuário que insira uma temperatura em Celsius.
    // Converta essa temperatura para Fahrenheit (F = C × 9/5 + 32).
    // Exiba o resultado em uma mensagem de alert .

    let Celsius = Number(prompt("Digite a temperatura em Celsius:"))
    let Fahrenheit

    Fahrenheit = Celsius * 9 / 5 + 32
    alert(`A temperatura em fahrenheit é:${Fahrenheit}`)
}
function Exercicio4() {
    // Exercício 4 - Verificar se um número é par ou ímpar
    // Solicite ao usuário que insira um número.
    // Verifique se o número é par ou ímpar e exiba uma mensagem
    // correspondente usando alert .

    let numero = Number(prompt("Digite um numero:"))

    if (numero % 2 === 0) {
        alert("O numero é par!")
    }
    else {
        alert("O numero é impar")
    }
}
function Exercicio5() {
    //     5. Exercício 5 - Calcular a média de três notas
    // Peça ao usuário para inserir três notas de um aluno.
    // Calcule a média das notas e exiba o resultado em um alert .

    let nota1 = Number(prompt("Digite a primeira nota:"))
    let nota2 = Number(prompt("Digite a segunda nota:"))
    let nota3 = Number(prompt("Digite a terceira nota:"))
    let media

    media = (nota1 + nota2 + nota3) / 3

    alert(`A media das notas ${nota1}, ${nota2} e ${nota3} é:${media}`)

}
function Exercicio6() {
    //     Exercício 6 - Calculadora de IMC
    // Solicite ao usuário que insira seu peso e altura.
    // Calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso
    // / (altura²).
    // Exiba o resultado em um alert e classifique o IMC de acordo com os
    // valores:
    // Menos de 18,5: Abaixo do peso
    // Entre 18,5 e 24,9: Peso normal
    // Entre 25 e 29,9: Sobrepeso
    // 30 ou mais: Obesidade

    let peso = Number(prompt("Digite seu peso: "))
    let altura = Number(prompt("Digite sua altura: "))
    let imc
    imc = peso / (altura * altura)

    if (imc < 18.5) {
        alert(`Seu IMC é: ${imc}, você está abaixo do peso!`)
    }
    else if (imc >= 18.5 && imc < 24.9) {
        alert(`Seu IMC é: ${imc}, você está no seu peso normal!`)
    }
    else if (imc >= 25 && imc <= 29.9) {
        alert(`Seu IMC é: ${imc}, você esta com sobrepeso!`)
    }
    else if (imc >= 30) {
        alert(`Seu IMC é: ${imc}, você esta com obesidade!`)
    }
    else {
        alert("Dados invalidos!")
    }
}
function Exercicio7() {
    //     Exercício 7 - Verificar ano bissexto
    // Solicite ao usuário que insira um ano.
    // Verifique se o ano é bissexto (um ano é bissexto se for divisível por 4, mas
    // não por 100, exceto se for divisível por 400) e exiba uma mensagem com o
    // resultado em alert .

    let ano = Number(prompt("Digite o ano:"))

    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        alert(`O ano ${ano} é ano bissexto!`)
    }
    else {
        alert("Não é ano bissexto!")
    }
}
function L2E1() {
    //     Gerador de Nome de Super-herói
    // Descrição: Junta o nome do usuário com um adjetivo e um superpoder
    // aleatório.
    // Entradas: Nome (ex: "Carlos").
    // Exemplo de Saída: "Capitão Carlos, o Invencível das Sombras"

    let nome = prompt("Digite seu nome:")
    let max = 11
    let min = 1

    let numero = Math.round(Math.random() * (max - min) + min)

    let frase1 = "o Implacável da Força Estrondosa"
    let frase2 = "o Veloz da Agilidade Relâmpago"
    let frase3 = "o Inabalável da Resistência Absoluta"
    let frase4 = "o Astuto da Persuasão Mental"
    let frase5 = "o Radiante da Projeção de Plasma"
    let frase6 = "o Tenaz do Impacto Sísmico"
    let frase7 = "o Silencioso da Camuflagem Perfeita"
    let frase8 = "o Sagaz da Previsão Acurada"
    let frase9 = "o Elástico da Distorção Espacial"
    let frase10 = "o Fervoroso da Combustão Espontânea"




    if (nome !== "") {



        if (numero === 1) {
            alert(`${nome} ${frase1}`)
        }
        else if (numero === 2) {
            alert(`${nome} ${frase2}`)
        }
        else if (numero === 3) {
            alert(`${nome} ${frase3}`)
        }
        else if (numero === 4) {
            alert(`${nome} ${frase4}`)
        }
        else if (numero === 5) {
            alert(`${nome} ${frase5}`)
        }
        else if (numero === 6) {
            alert(`${nome} ${frase6}`)
        }
        else if (numero === 7) {
            alert(`${nome} ${frase7}`)
        }
        else if (numero === 8) {
            alert(`${nome} ${frase8}`)
        }
        else if (numero === 9) {
            alert(`${nome} ${frase9}`)
        }
        else if (numero === 10) {
            alert(`${nome} ${frase10}`)
        }

    }
    else {
        alert("Você não digitou seu nome!")
    }

}
function L2E2() {
    // Horóscopo Interativo
    // Descrição: Mostra uma previsão aleatória com base no signo do usuário.
    // Entradas: Seleção do signo (ex: "Leão").
    // Exemplo de Saída: "Hoje é um ótimo dia para buscar novos desafios, Leão!"

    // Áries, Touro, Gêmeos, Câncer, Leão, Virgem, Libra, Escorpião, Sagitário, Capricórnio, Aquário e Peixes

    let signo = prompt("Digite seu signo com as opções abaixo:\nAries = 0\nTouro = 1 \nGêmeos = 2\nCâncer = 3\nLeão = 4\nVirgem= 5\nLibra = 6\nEscorpião = 7 \nSagitário = 8\nCapricórnio = 9\nAquário = 10\nPeixes = 11");

    if (signo === null || signo.trim() === "") {
        alert("Você não digitou nada!");
    } else {
        let numeroSigno = Number(signo);

        switch (numeroSigno) {
            case 0:
                alert("A energia está alta para novos projetos, mas controle a impulsividade.");
                break;
            case 1:
                alert("Estabilidade e conforto em foco. Bom momento para cuidar das finanças e prazeres simples.");
                break;
            case 2:
                alert("Comunicação fluida e ideias borbulhantes. Conexões sociais em destaque.");
                break;
            case 3:
                alert("Intuição forte e necessidade de nutrir o lar e as emoções.");
                break;
            case 4:
                alert("Confiança e brilho pessoal em alta. Busque o reconhecimento, mas com humildade.");
                break;
            case 5:
                alert("Foco nos detalhes e organização. Produtividade em destaque, mas evite a autocrítica excessiva.");
                break;
            case 6:
                alert("Harmonia e equilíbrio nos relacionamentos. Busque a justiça e a beleza ao seu redor.");
                break;
            case 7:
                alert("Intensidade emocional e transformações profundas. Poder de regeneração em evidência.");
                break;
            case 8:
                alert(" Aventura e expansão de horizontes. Busque novos aprendizados e experiências.");
                break;
            case 9:
                alert("Disciplina e ambição para alcançar seus objetivos de longo prazo.");
                break;
            case 10:
                alert("Inovação e originalidade em destaque. Conexões com grupos e causas sociais importantes.");
                break;
            case 11:
                alert("Sensibilidade e empatia afloradas. Conecte-se com sua espiritualidade e intuição.");
                break;
            default:
                alert("Você não digitou nenhum número válido!");
        }
    }
}
function L2E3() {
    // Jogo do Par ou Ímpar
    // Objetivo: O usuário joga contra o computador para ver quem vence no jogo de
    // par ou ímpar.

    let parImpar = prompt("Escolha entre Par ou Impar")
    let numero = Number(prompt("Digite um numero:"))
    let max = 0, min = 10
    let numeroAleatorio = Math.round(Math.random() * (max - min) + min)
    let soma = numero + numeroAleatorio
    let resultado

    if (soma % 2 === 0) {

        resultado = "par"
    }
    else {
        resultado = "impar"
    }

    alert(`O computador escolheu ${numeroAleatorio}`)
    alert(`A soma é: ${soma} (${resultado})`)

    if (parImpar === resultado.toLowerCase()) {
        alert("Você ganhou!")
    }
    else {
        alert("Você perdeu!")
    }


}
function L2E4() {
    //     Contador de Cliques por Segundo
    // Descrição: Conta quantos cliques o usuário deu.
    // Entradas: Cliques em botão.
    // Exemplo de Saída: “Você clicou 32 vezes!” Ao clicar no botão de resultado.
    
   alert("Clique em sequencia no contador\ne vejá quantos cliques você deu!")
    
}

let cliques = 0
function L2E4Botao() {
    cliques++
    console.log(cliques)
    document.getElementById("click").textContent = cliques;
    
}


function L2E5() {
    //     Jogo do Número Secreto
    // Descrição: Usuário tenta adivinhar um número aleatório de 1 a 100.
    // Entradas: Número digitado.
    // Exemplo de Saída: “Tente novamente.”

    let max = 100
    let min = 1
    const numeroAleatorio = Math.round(Math.random() * (max - min) + min)
    console.log(numeroAleatorio)
    let contador = 1

    let numDig = Number(prompt(`Digite um valor entre ${min} e ${max}:`))
    console.log(`Contador1: ${contador}`)
    
    if (numeroAleatorio == numDig) {
        alert(`TU É MUITO BOM!!!
            ACERTOU NA PRIMEIRA`)
        }
        else if (numeroAleatorio != numDig) {

        while (numeroAleatorio != numDig && contador != 5) {
            numDig = Number(prompt(`ok... vou te dar mais 
                    ${5 - contador} tentativas`))
            contador++
            console.log(`contador2: ${contador}`)
        }
        if (numeroAleatorio == numDig) {
            alert(`Boaa você acertou!!`)
        }
        else {
            alert("Gamer over")
        }
        contador = 1
    }
    
    
}


function gerarCaractereAleatorio() {
    //     Gerador de Senhas Aleatórias
    // Descrição: Cria senhas com letras, números e símbolos.
    // Entradas: Comprimento desejado.
    // Exemplo de Saída: “Senha gerada: aX$7v!2d”

    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const numeroAleatorio = Math.floor(Math.random() * caracteres.length)

    return caracteres.charAt(numeroAleatorio)
}


function L2E6() {
    let quantidade = Number(prompt("Informe quantos caracteres sua senha deve ter - de 1 a 10"))
    let senha = ''
    while (quantidade > 0) {
        senha = senha + gerarCaractereAleatorio()
        quantidade = quantidade - 1
    }
    alert(`A senha é ${senha}`)
}

function L2E7() {

    let pergunta = [`1) Qual o nome da primeira Constituição do Brasil?
    a) Carta Magna            b) Constituição Imperial de 1824
    c) Constituição da República de 1891   
    d) Constituição Cidadã de 1988

Digite apenas a letra da resposta:`,
`2) Quem escreveu a peça teatral 'Romeu e Julieta?
    a) William Shakespeare        b) Jane Austen
    c) Charles Dickens     d) Oscar Wilde

Digite apenas a letra da resposta:`,
`3) Qual a linguagem de programação mais usada para desenvolvimento web front-end?
    a) Python                b) Java
    c) JavaScript            d) C#

Digite apenas a letra da resposta:`]

    let num = 0
    let alt
    let resp = []
   
        while (num <= 2) {
            alt = prompt(pergunta[num])
            if (pergunta[0] && alt == `b` || pergunta[1] && alt == `a` || pergunta[2] && alt == `c`) {
                alt = 1
            } else {
                alt = 0
            }
            resp.push(alt)            
            num++
        }
      
    let ttl = resp[0] + resp[1] + resp[2]
    alert(`Você acertou ${ttl} de 03`)
}

function L2E8(){
// Simulador de Sorte do Dia
// Descrição: Exibe uma mensagem motivacional aleatória.
// Entradas: Clique em botão.
// Exemplo de Saída: “Hoje é um ótimo dia para começar algo novo.”

let max = 6
let min = 1
let numero_aleatorio = Math.floor(Math.random() * (max - min) + min)
console.log(numero_aleatorio);

switch(numero_aleatorio){
    case(1): alert("Cada novo dia é uma chance de recomeçar e fazer diferente. Aproveite!")
    break
    case(2): alert("Não espere pelas condições perfeitas para agir. A ação cria o caminho.")
    break
    case(3): alert("Seus sonhos merecem sua persistência e dedicação. Não desista!")
    break
    case(4):alert("Os obstáculos são apenas degraus para te levar mais alto. Use-os com sabedoria.")
    break
    case(5): alert("Acredite no seu potencial. Você é mais forte e capaz do que imagina.")
    break
    case(6):
    break
    
}

}
function L2E9(){
//     Decisômetro (Sim/Não/Talvez)
// Descrição: Responde aleatoriamente com “Sim”, “Não” ou “Talvez”.
// Entradas: Clique em botão.
// Exemplo de Saída: “Talvez”

let max = 4
let min = 1
let numero_aleatorio = Math.floor(Math.random() * (max - min) + min)
console.log(numero_aleatorio);



switch(numero_aleatorio){
    case(1): alert("Sim!")
    break
    case(2): alert("Não!")
    break
    case(3): alert("Talvez!")
    break
    case(4):
    break 

}
}


