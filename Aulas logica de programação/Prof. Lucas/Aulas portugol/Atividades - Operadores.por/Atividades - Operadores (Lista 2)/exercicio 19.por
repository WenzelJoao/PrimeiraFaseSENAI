/*Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás,
  sendo que o metro cúbico de gás custa R$15 reais. No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito somando
  o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. Criar um programa que pergunte quantas pessoas vão no passeio e o tempo de passeio.
  Mostrar na tela o total cobrado pelo passeio.*/
programa {
    funcao inicio() {
        // Declaração de variáveis
        inteiro quantidadeDePessoas, tempoDePasseio
        real custoGasMetroCubico = 15, taxaPorPessoa = 20, gastoTotalGas, custoTotalPessoas, valorTotalPasseio
        real metrosCubicosPorMinuto = 10
        
        // Entrada de dados
        escreva("Quantas pessoas vão no passeio: ")
        leia(quantidadeDePessoas)

        escreva("Quanto tempo de passeio (em minutos): ")
        leia(tempoDePasseio)

        // Processamento de dados
        gastoTotalGas = (tempoDePasseio / 5) * metrosCubicosPorMinuto * custoGasMetroCubico
        custoTotalPessoas = quantidadeDePessoas * taxaPorPessoa
        valorTotalPasseio = gastoTotalGas + custoTotalPessoas

        // Saída de dados
        escreva("O valor total do passeio é: R$", valorTotalPasseio)
    }
}