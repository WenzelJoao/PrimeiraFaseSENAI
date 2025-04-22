 // Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação. 
 //Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês e no final mostre a média de horas por semana naquele mês.

programa {
  funcao inicio() {

  // Declaração de variaveis 
  real semana1, semana2, semana3, semana4, mediaHoras, horasSemana
  

  // Entrada de dados
  escreva("Digite quantas horas você estudou na semana 1 : ")
  leia(semana1)

  escreva("Digite quantas horas você estudou na semana 2 : ")
  leia(semana2)

  escreva("Digite quantas horas você estudou na semana 3 : ")
  leia(semana3)

  escreva("Digite quantas horas você estudou na semana 4 : ")
  leia(semana4)

  horasSemana = semana1 + semana2 + semana3 + semana4
  mediaHoras = horasSemana / 4

  escreva("A media de horas estudadas por semana no mes é: ", mediaHoras)


  }
}
