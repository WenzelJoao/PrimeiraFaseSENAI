 //Faça um programa onde o usuário deve digitar a temperatura em graus Celsius e mostrar na tela essa temperatura convertida em Fahrenheit.

programa {
  funcao inicio() {

  // Declaração de variaveis 
  real celsius, fahrenheit, resultado

  // Entrada de dados
  escreva("Digite a temperatura em graus Celsius e vamos converter para Fahrenheit: ")
  leia(celsius)

  resultado = celsius * 9/5 
  fahrenheit = resultado + 32 


  escreva("A temperatura convertida para Fahrenheit é: ", fahrenheit)



  }
}
