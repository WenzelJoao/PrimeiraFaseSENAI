/*5.1// Crie um programa que execute a validação de uma senha digitada
pelo usuário. Caso ele digite a senha “1234” devemos informar a ele
“acesso permitido”. Para qualquer outra senha digitada, informar “acesso
negado”.*/

programa {
  funcao inicio() {
    inteiro senhaCorreta = 1234,senha

    escreva("Digite a senha: ")
    leia(senha)

    se(senha == senhaCorreta){
    escreva("acesso permitido")

    }

    senao 
    escreva("acesso negado")

  }
}
