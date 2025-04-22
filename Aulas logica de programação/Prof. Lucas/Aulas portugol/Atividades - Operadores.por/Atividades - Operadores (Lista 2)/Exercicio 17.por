
programa
{
    funcao inicio()
    {
        inteiro pessoasEsperadas, pessoasBanheiro = 50, pessoasBar = 150
        inteiro mediasBanheiro, mediaBar

        // Entrada de dados
        escreva("Digite a quantidade de pessoas esperadas: ")
        leia(pessoasEsperadas)

        // Processamento de dados
        mediasBanheiro = pessoasEsperadas / pessoasBanheiro
        mediaBar = pessoasEsperadas / pessoasBar
        

        // Saída de dados
        escreva("A média de banheiros utilizados no festival é: ", mediasBanheiro, "\nA média de bares utilizados no festival é: ", mediaBar)
    }
}