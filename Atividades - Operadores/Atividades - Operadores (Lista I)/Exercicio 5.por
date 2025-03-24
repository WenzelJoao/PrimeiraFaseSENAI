 //Crie um programa que solicite ao usuário um valor em horas e converta para minutos e segundos.

programa {
  funcao inicio() {

  // Declaração de variaveis 
  inteiro horas, minutos, segundos

  // Entrada de dados
  escreva("Digite um valor em horas: ")
  leia(horas)

  minutos = horas * 60
  segundos = horas * 3600


  escreva("O valor de horas em minutos é: ",minutos, "\nE segundos é: ", segundos)


  }
}
