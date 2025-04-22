/*5.2 Mano Juca bateu a cabeça e está com problemas de
raciocínio...
Está analisando dois números há horas e não consegue
descobrir qual deles é o maior. Vamos ajuda-lo!
Crie um algoritmo que leia dois números A e B e imprima o
maior deles.
*/

programa {
  funcao inicio() {
    real numeroA,numeroB

    escreva("Digite o numero A: ")
    leia(numeroA)

    escreva("Digite o numero B: ")
    leia(numeroB)

    limpa()

    se(numeroA>numeroB){
      escreva("O numero A: ",numeroA, " é maior que o nuemro B: ",numeroB)

    }

    senao 
    escreva("O numero B: ",numeroB, " é maior que o numero A: ",numeroA)

  }
}
