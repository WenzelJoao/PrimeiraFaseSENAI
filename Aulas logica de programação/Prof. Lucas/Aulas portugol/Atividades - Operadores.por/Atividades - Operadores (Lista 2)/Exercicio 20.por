/* As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em média 200 anos. A reprodução se dá a cada 4 anos,
 tendo somente 1 filhote por vez. Programar um sistema que calcule o total de filhotes ao longo da vida e a média de filhotes
  de uma baleia dessa espécie por década.*/
programa {
    funcao inicio() {
        // Declaração de variáveis
        inteiro anosDevidaBaleia = 200,reproducaoBaleia = 4,decada = 10, mediaFilhotesBaleia,totalFilhotes

        // Processamento de dados
        mediaFilhotesBaleia = (anosDevidaBaleia / reproducaoBaleia) / decada
        totalFilhotes = anosDevidaBaleia / reproducaoBaleia

        // Saída de dados
        escreva("Total de filhotes ao longo da vida: ", totalFilhotes, "\n")
        escreva("Média de filhotes de uma baleia da groelandia por decada é: ",mediaFilhotesBaleia)
    }
}