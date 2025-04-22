/*5.5a// Mano Juca é meio tansinho, coitado. Disso vocês já sabem. Mas a
coisa tem piorado. Não consegue nem saber se passou...
Crie um algoritmo para ler duas notas no Mano Juca e calcular a média
dele, coitado...
Diga também se o malandro passou (a média no mobral dele é 7,0).
*/
programa {
  funcao inicio() {
    inteiro notaProva1,notaProva2
    real media
    escreva("Digite a nota da prova 1: ")
    leia(notaProva1)

    escreva("Digite a nota da prova 2: ")
    leia(notaProva2)


    media = (notaProva1 + notaProva2) / 2

    limpa()

    escreva("\nSua media é: ",media)

    se (media>=7){
      escreva("\nVocê passou! ")
    }
    senao 
    escreva("\nVocê reprovou! ")
  }
}
