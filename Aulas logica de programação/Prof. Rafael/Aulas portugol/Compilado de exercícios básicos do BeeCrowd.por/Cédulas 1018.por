//Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto.
//As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.
programa {
  funcao inicio() {
    inteiro valor, resto, notas100, notas50, notas20, notas10, notas5, notas2, notas1

      escreva("Valor: R$")
      leia(valor)

        notas100 = valor / 100
        resto = valor % 100

        notas50 = resto / 50
        resto = resto % 50

        notas20 = resto / 20
        resto = resto % 20

        notas10 = resto / 10
        resto = resto % 10

        notas5 = resto / 5
        resto = resto % 5

        notas2 = resto / 2
        resto = resto % 2

        notas1 = resto

        escreva("\n", valor)
        escreva("\n", notas100, " nota(s) de R$ 100,00")
        escreva("\n", notas50, " nota(s) de R$ 50,00")
        escreva("\n", notas20, " nota(s) de R$ 20,00")
        escreva("\n", notas10, " nota(s) de R$ 10,00")
        escreva("\n", notas5, " nota(s) de R$ 5,00")
        escreva("\n", notas2, " nota(s) de R$ 2,00")
        escreva("\n", notas1, " nota(s) de R$ 1,00")

  }
}
