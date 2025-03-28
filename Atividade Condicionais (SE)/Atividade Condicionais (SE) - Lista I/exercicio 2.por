//Crie uma programa que verifique se uma pessoa pode dirigir. Deve ser perguntada a idade da pessoa e se ela tiver idade suficiente 
//para dirigir (18 anos ou mais), exiba "Você pode dirigir".

programa {
  funcao inicio() {
    
    // Declaração de variaveis 
    inteiro idade, idadeMinimadirigir = 18 
    

    // Entrada de dados 
    escreva("Digite a sua idade: ")
    leia(idade)

    se (idade>=idadeMinimadirigir){

      escreva("Você pode dirigir. ")
    }

  
  }
}
