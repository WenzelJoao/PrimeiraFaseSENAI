//Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY).
//Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.

 


programa {
  funcao inicio() {


   // Declaração de variaveis 
    inteiro anoNascimento, anoAtual, idadeAnos, idadeMeses, idadeSemanas, idadeDias
    

    // Entrada de dados 
      escreva("Em que ano você nasceu? ")
      leia(anoNascimento)

      escreva("Em que nós estamos? ")
      leia(anoAtual)

      idadeAnos = anoAtual - anoNascimento
      idadeDias = 365 * idadeAnos
      idadeMeses = idadeAnos * 12
      idadeSemanas = idadeDias / 7
      

      escreva("\n A sua idade em anos é :", idadeAnos, "\n Meses é: ",idadeMeses, "\n Semanas é: ", idadeSemanas, "\n Dias: ", idadeDias)



    
      



     


  }
}
