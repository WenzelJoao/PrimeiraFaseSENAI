/* Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos.
 Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo)
  existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.*/
programa {
    funcao inicio() {
        // Declaração de variáveis
       inteiro machosSolteiros,quantidadeMachos = 5, quantidadeFemeas = 9,quantidadeCasais,femeasSolteiras = 9 
       inteiro territorioCasalLeoes = 400,areaTotal, territorioLeao = 320
        
        // Entrada de dados
        escreva("Digite a quantidade de casais na reserva ambiental: ")
        leia(quantidadeCasais)

        // Processamento de dados
        machosSolteiros = quantidadeMachos - quantidadeCasais
        femeasSolteiras = quantidadeFemeas - quantidadeCasais
        areaTotal = (quantidadeCasais * territorioCasalLeoes) + (machosSolteiros * territorioLeao) + (femeasSolteiras * territorioLeao)

        // Saída de dados
        escreva("A area dominada por leões é : ",areaTotal)
    }
}