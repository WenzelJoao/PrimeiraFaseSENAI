/*5.5// Mano Juca é meio tansinho, coitado. Disso vocês já sabem. Mas a
coisa tem piorado. Um professor inventou de usar o tal do sistema de
média ponderada, onde cada prova tem um valor (peso) diferente. Nas
ideia desse professor que não tem pena da ausência de poder de
processamento mental do Mano Juca cada prova tem o peso:
- Prova 1: peso 0.4;
- Prova 2: peso 0.6;
- Prova 3: peso 1.
Crie um algoritmo para ler as notas no Mano Juca e calcular a média
dele, coitado...
Diga também se o malandro passou (a média no mobral dele é 7,0).*/

programa {
  funcao inicio() {

    inteiro notaProva1,notaProva2,notaProva3
    real pesoProva1 = 0.4,pesoProva2 = 0.6,pesoProva3 = 1,media
    escreva("Digite a nota da prova 1: ")
    leia(notaProva1)

    escreva("Digite a nota da prova 2: ")
    leia(notaProva2)

    escreva("Digite a nota da prova 3: ")
    leia(notaProva3)

    media = (notaProva1 * pesoProva1 + notaProva2 * pesoProva2 + notaProva3 * pesoProva3) / (pesoProva1 + pesoProva2 + pesoProva3)

    limpa()

    escreva("\nSua media é: ",media)

    se (media>=7){
      escreva("\nVocê passou! ")
    }
    senao 
    escreva("\nVocê reprovou! ")

    


  }
}
