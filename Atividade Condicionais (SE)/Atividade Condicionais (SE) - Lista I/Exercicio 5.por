//Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso
// a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!".

programa {
  funcao inicio() {

      real nota1,nota2,nota3,media

      escreva("Nota 1: ")
      leia(nota1)

      escreva("Nota 2: ")
      leia(nota2)

      escreva("Nota 3: ")
      leia(nota3)

      media = (nota1+nota2+nota3) / 3

      se((nota1+nota2+nota3)/3>=7)

      escreva("Aprovado!","\nSua media foi: ",media)
      
      senao

      escreva("Reprovado!","\nSua media foi: ",media)

    
  }
}
