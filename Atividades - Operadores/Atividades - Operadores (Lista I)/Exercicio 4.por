//Desenvolva um programa que pergunte ao usuário o salário bruto e calcule o salário líquido, considerando um desconto de 20% para impostos.


programa {
  funcao inicio() {
    // Declaração de variaveis 
    real salarioBruto, resultado, salarioLiquido,resultado2
    

    // Entrada de dados
    escreva("Qual o seu salario bruto? ")
    leia(salarioBruto)

    resultado = 20 * salarioBruto
    resultado2 = resultado / 100
    salarioLiquido = salarioBruto - resultado2

    escreva("O seu salario liquido é: ", salarioLiquido)





    
  }
}
