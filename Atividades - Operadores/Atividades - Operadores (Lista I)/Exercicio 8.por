 //Na sua lista de compras do mercado, constam apenas 3 itens: arroz, batata palha e um suco de garrafa. Porém, você possui apenas uma nota
 // de R$100 para pagar. Faça um programa no qual sejam digitados os valores dos itens e mostre na tela valor que você deve receber (troco).

programa {
  funcao inicio() {

  // Declaração de variaveis 
  real valorArroz, valorBatataPalaha, valorSucoGarrafa, troco, valorItens
  inteiro dinheiro = 100

  // Entrada de dados
  escreva("Digite o valor do arroz: ")
  leia(valorArroz)

  escreva("Digite o valor da batata palha: ")
  leia(valorBatataPalaha)

  escreva ("digite o valor do suco de garrafa: ")
  leia(valorSucoGarrafa)

  valorItens = valorArroz + valorBatataPalaha + valorSucoGarrafa
  troco = dinheiro - valorItens

  escreva("O seu troco é: ", troco)
  }
}
