/*Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. A média é composta por três notas: Atividade Individual,
 Seminário em Equipe, Projeto final. O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada na tela.*/

programa {
    funcao inicio() {
        // Declaração de variáveis
        real notaAtividadeIndividual,notaSeminarioEquipe,notaProjetoFinal
        real pesoAtividadeIndividual,pesoSeminarioEquipe,pesoProjetoFinal,mediaPonderada
        // Entrada de dados
        escreva("Digite a nota da atividade individual: ")
        leia(notaAtividadeIndividual)
        escreva("digite o peso da atividade individual: ")
        leia(pesoAtividadeIndividual)

        escreva("Digite a nota do seminario em equipe: ")
        leia(notaSeminarioEquipe)
        escreva("Digite o peso do seminario em equipe: ")
        leia(pesoSeminarioEquipe
        )
        escreva("Digite a nota do projeto final: ")
        leia(notaProjetoFinal)
        escreva("Digite o peso do projeto final: ")
        leia(pesoProjetoFinal)

        // Processamento de dados
       mediaPonderada = (notaAtividadeIndividual * pesoAtividadeIndividual + notaSeminarioEquipe * pesoSeminarioEquipe + notaProjetoFinal * pesoProjetoFinal) / (pesoAtividadeIndividual + pesoSeminarioEquipe + pesoProjetoFinal)

        // Saída de dados
        escreva("A media ponderada é ",mediaPonderada)
    }
}