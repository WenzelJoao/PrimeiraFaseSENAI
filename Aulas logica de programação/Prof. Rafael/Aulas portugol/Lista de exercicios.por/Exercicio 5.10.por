/*5.10// Na feira da rua do Mano Juca, as maçãs custam R$0,30 se ele
comprar menos de uma dúzia, mas se comprar 12 ou mais cada uma custa
apenas R$0,25. Crie um programa para ler o número de maçãs que ele vai
comprar e informar quanto será o total da compra.*/
programa {
  funcao inicio() {
    inteiro quantidadeMaca
    real macaMenosDuzia = 0.30, macaMaisDuzia = 0.25,valorTotal

    escreva("Digite o numero de maçãs: ")
    leia(quantidadeMaca)

    limpa()

    se (quantidadeMaca<12){
      valorTotal = quantidadeMaca * macaMenosDuzia
      
      escreva("\nQuantidade de maçãs: ",quantidadeMaca)
      escreva("\nValor total: R$",valorTotal)
    }
    se (quantidadeMaca>=12){
      valorTotal = quantidadeMaca * macaMaisDuzia

      escreva("\nQuantidade de maçãs: ",quantidadeMaca)
      escreva("\nValor total: R$",valorTotal)
      
    }


  }
}
