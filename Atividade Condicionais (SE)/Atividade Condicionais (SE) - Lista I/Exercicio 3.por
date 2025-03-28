//Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço,
//dê um bônus de 5% sobre o salário.

programa {
  funcao inicio() {

      inteiro anosDeEmpresa
      real salario,bonus,salarioComBonus
    escreva("Digite o seu salário bruto: R$")
    leia(salario)

    escreva("digite quantos anos você tem de empresa: ")
    leia(anosDeEmpresa)

    se(anosDeEmpresa>5){
      
      bonus = salario * 0.05
      salarioComBonus = salario + bonus

      escreva("Parabéns você ganhou um bonus salárial, seu salário ficou: R$",salarioComBonus)
    }
  }
}
