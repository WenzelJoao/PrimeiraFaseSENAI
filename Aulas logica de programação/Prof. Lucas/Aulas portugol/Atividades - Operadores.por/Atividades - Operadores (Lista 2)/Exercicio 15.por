/*Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos.
 O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros)
  da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago,
   sendo que uma caixa de azulejo com 60 unidades custa R$45,50.*/ 
programa {
  funcao inicio() {
    // Declração de variaveis 
    real larguraPiscina,comprimentoPiscina,metrosAzulejos,precoCaixa = 45.5,precoPagar
    inteiro azulejosPorMetroQuadrado = 120,quantidadeAzulejos,quantidadeCaixas,caixaAzulejos = 60
    
    // Entrada de dados 
    escreva("Digite o a largura que voce deseja da piscina: ")
    leia(larguraPiscina)

    escreva("Digite o comprimento que você deseja da sua piscina: ")
    leia(comprimentoPiscina)

    
    // Processamneto de dados 

    metrosAzulejos = larguraPiscina * comprimentoPiscina
    quantidadeAzulejos = metrosAzulejos * azulejosPorMetroQuadrado
    quantidadeCaixas = quantidadeAzulejos / caixaAzulejos
    precoPagar = quantidadeCaixas * precoCaixa

    
    // Saida de dados 
    escreva("A area em m² é: ",metrosAzulejos,"m²","\nA quantidade de azulejo a serem comprados é: ",quantidadeAzulejos,"\nO valor a ser pago pelos azulejos é: ","R$",precoPagar)

  }
}
