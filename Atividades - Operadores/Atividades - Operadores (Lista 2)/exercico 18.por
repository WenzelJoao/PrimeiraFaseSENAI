/*Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia. Você pretende passar um tempo com alguns 
amigos nessa pousada, sendo que todos ficarão no mesmo quarto. Informar a quantidade de pessoas, o número de diárias e quantas pessoas
 do grupo vão querer café diário. Mostrar na tela o total a pagar.*/
programa {
    funcao inicio() {
        // Declaração de variáveis
        inteiro quantidadeDePessoasHospedadas, diasHospedados, quantasVaoTomarCafe
        real diaria = 280.0, cafe = 15.0, valorTotalHospedagem, valorTotalCafe, valorFinal

        // Entrada de dados
        escreva("Quantas pessoas vão se hospedar no quarto? ")
        leia(quantidadeDePessoasHospedadas)

        escreva("Quantas diárias vocês vão ficar hospedados? ")
        leia(diasHospedados)

        escreva("Quantas pessoas vão querer café da manhã? ")
        leia(quantasVaoTomarCafe)

        // Processamento de dados
        valorTotalHospedagem = diaria * diasHospedados
        valorTotalCafe = quantasVaoTomarCafe * cafe * diasHospedados
        valorFinal = valorTotalHospedagem + valorTotalCafe

        // Saída de dados
        escreva("O valor total a pagar é: R$", valorFinal)
    }
}