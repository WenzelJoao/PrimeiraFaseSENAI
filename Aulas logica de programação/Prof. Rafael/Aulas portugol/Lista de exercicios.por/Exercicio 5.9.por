/*5.9// Tendo como entrada a altura (em metros) e o gênero (1: feminino;
2: masculino) de uma pessoa, construa um programa que calcule e
apresente seu peso ideal utilizando as fórmulas abaixo:
- para mulheres: (62.1 * altura) – 44.7
- para homens: (72.7 * altura) – 58*/

programa {
  funcao inicio() {
    inteiro genero, pesoIdeal
    real altura

    escreva("Digite a sua altura(em metro): ")
    leia(altura)

    escreva("Digite o seu genero 1:feminino 2:masculino: ")
    leia(genero)

    limpa()

    se(genero == 1){
      pesoIdeal = (62.1 * altura) - 44.7
      escreva("O seu peso ideal é: ",pesoIdeal,"KG")
    }

    se (genero == 2){
      pesoIdeal = (72.7 * altura) - 58
      escreva("O seu peso ideal é: ",pesoIdeal,"KG")
    }

  }
}
