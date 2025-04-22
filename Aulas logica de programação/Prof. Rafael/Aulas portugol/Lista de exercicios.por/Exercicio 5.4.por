/*5.4 – Mano Juca palestreiro;
Faça um algoritmo que leia o nº da palestra que ele quer participar e
mostre o local e o horário que ela acontecerá.
Palestras disponíveis:
1 - Animações com Scratch, laboratório 305, 19h;
2 - Scratch para gamers, laboratório 512, 20h;
3 - JavaScript para leigos, laboratório 101, 19h;
4 - Tópicos avançados de JavaScript, laboratório 305, 20h;
5 - Vida e carreira, auditório, 21h.*/

programa {
  funcao inicio() {
    inteiro numeroPalestra
    escreva("Digite a o numero da palestra que você quer participar: ")
    leia(numeroPalestra)

    limpa()

    se (numeroPalestra == 1){
      escreva("1 - Animações com Scratch, laboratório 305, 19h;")
    }
    se (numeroPalestra == 2){
      escreva("2 - Scratch para gamers, laboratório 512, 20h;")
    }
    se (numeroPalestra == 3){
      escreva("3 - JavaScript para leigos, laboratório 101, 19h;")
    }
    se (numeroPalestra == 4){
      escreva("4 - Tópicos avançados de JavaScript, laboratório 305, 20h;")
    }
    se (numeroPalestra == 5){
      escreva("5 - Vida e carreira, auditório, 21h.")
    }

  }
}
