/*Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto. 
Criar um programa que receba os valores dos 3 livros e mostra na tela o total dos livros sem desconto e com desconto.*/

programa {
  funcao inicio() {

    // Declaração de variaveis 
    real valorLivro1, valorLivro2, valorLivro3, valorTotal, valorDesconto

    // Entrada de dados

    escreva("Digite o valor do livro: ")
    leia(valorLivro1)

    escreva("Digite o valor do livro: ")
    leia(valorLivro2)

    escreva("Digite o valor do livro: ")
    leia(valorLivro3)

    valorTotal = valorLivro1 + valorLivro2 + valorLivro3
    valorDesconto = (valorLivro1 + valorLivro2 + valorLivro3) * 0.15
    valorDesconto = valorTotal - valorDesconto

    escreva("O valor total dos livros é: ", valorTotal, "\ne o valor com desconto é: ", valorDesconto)




  }
}
