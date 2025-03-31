//Para poder realizar o primeiro teste de demanda na propriedade, Heitor está contratando pessoas para desenvolver o protótipo
// do seu caixa de atendimento/pagamento. Este caixa perguntará às pessoas as quantidades colhidas de cada fruta e, de acordo com a tabela de preços,
// vai apresentar o recibo ao cliente e o valor a ser pago.


programa {
  funcao inicio() {
    //Declaraçãode variaveis 
    real maca = 1.50,laranja = 2.00,bergamota = 1.00, banana = 1.20,pera = 0.5,valorTotal
    real valorMaca,valorLaranja,valorBergamota,valorBanana,valorPera
    inteiro quantidadeMaca,quantidadeLaranja,quantidadeBergamota,quantidadeBanana,quantidadePera

    escreva("\nDigite quantas maçãs você colheu: ")
    leia(quantidadeMaca)

    escreva("Digite quantas laranjas você colheu: ")
    leia(quantidadeLaranja)

    escreva("Digite quantas bergamotas você colheu: ")
    leia(quantidadeBergamota)

    escreva("Digite quantas bananas você colheu: ")
    leia(quantidadeBanana)

    escreva("Digite quantas peras você colheu: ")
    leia(quantidadePera)

   limpa()

    valorTotal = quantidadeMaca * maca + quantidadeLaranja * laranja + quantidadeBergamota * bergamota + quantidadeBanana * banana + quantidadePera * pera
    valorMaca = quantidadeMaca * maca
    valorLaranja = quantidadeLaranja * laranja
    valorBergamota = quantidadeBergamota * bergamota
    valorBanana = quantidadeBanana * banana
    valorPera = quantidadePera * pera

    escreva("\n----------------------------------")
    se (quantidadeMaca==0){
      
    }
    se (quantidadeMaca>0)
    escreva("\nMaçã: ",quantidadeMaca,"UN"," R$",valorMaca)

    se (quantidadeLaranja==0){
      
    }
    se (quantidadeLaranja>0)
    escreva("\nLaranja: ",quantidadeLaranja,"UN"," R$",valorLaranja)

    se (quantidadeBergamota==0){
      
    }
    se (quantidadeBergamota>0)
    escreva("\nBergamota: ",quantidadeBergamota,"UN"," R$",valorBergamota)

    se (quantidadeBanana==0){
      
    }
    se (quantidadeBanana>0)
    escreva("\nBanana: ",quantidadeBanana,"UN"," R$",valorBanana)

    se (quantidadeMaca==0){
      
    }
    se (quantidadePera>0)
    escreva("\nPera: ",quantidadePera,"UN"," R$",valorPera)

    escreva("\nValor total: R$",valorTotal)

    escreva("\n----------------------------------")









  }
}
