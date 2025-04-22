/*Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp.
 Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) 
 desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício
  e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa. */

programa {
  funcao inicio() {


    // Declaração de variaveis 
    real choppDesperdicado,choppSobrou,choppComprado = 300,quantidadePessoas = 45,mediaBebidos, mediaConsumida
    

    // Entrada de dados 
    escreva("Qual a quantidade de chopp foi desperdiçado: ")
    leia(choppDesperdicado)

    escreva("Qual a quantidade de chopp sobrou: ")
    leia(choppSobrou)

    // Processamento de dados
    mediaConsumida = choppComprado - choppDesperdicado - choppSobrou
    mediaBebidos = mediaConsumida / quantidadePessoas
    

    // Saida de dados 
    escreva("A media de chopp bebido por pessoa é: ",mediaBebidos)
    





    
      



     


  }
}
