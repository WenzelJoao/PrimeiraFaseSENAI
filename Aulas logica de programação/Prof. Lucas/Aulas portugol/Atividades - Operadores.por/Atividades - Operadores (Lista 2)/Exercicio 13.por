/* Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00.
 Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. */
programa {
  funcao inicio() {

    // Declaração de variaveis 
    real quantidadePlastico, quantidadePapel, quantidadeMetal,receberPlastico,receberPapel,receberMetal,valorKgPlastico = 0.2,valorKgPapel = 0.1, valorKgMetal = 0.1

    // Entrada de dados
    escreva("Qual a quantidade(KG) de plastico que você quer entregar?: ")
    leia(quantidadePlastico)

    escreva("Qual a quantidade(KG) de papel que você quer entregar?: ")
    leia(quantidadePapel)

    escreva("Qual a quantidade(KG) de metal que você quer entregar?: ")
    leia(quantidadeMetal)



    // Processamento de dados
    receberPlastico = (quantidadePlastico * valorKgPlastico )
    receberPapel = quantidadePapel * valorKgPapel
    receberMetal = quantidadeMetal * valorKgMetal

    escreva("O valor a receber de platico é: ","R$",receberPlastico, "\nO valor a receber de papel é: ","R$",receberPapel, "\nO valor a receber de metal é: ","R$",receberMetal)



    



  }
}
