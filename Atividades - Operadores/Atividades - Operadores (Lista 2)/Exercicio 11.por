/*Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo e mostrar o resultado na tela.*/

programa {
  funcao inicio() {
    // Declaração de variaveis 
    real peso, altura, imc

    // Entrada de dados

    escreva("Vamos calular o seu IMC , digite o seu peso: ")
    leia (peso)

    escreva("Digite a sua altura: ")
    leia(altura)

    imc = peso / (altura * altura) 

    escreva("O seu IMC é: ", imc)
    



  }
}
