/*Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. 
Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos 
(a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual 
que cada um representa em relação ao total de eleitores. */
programa {
  funcao inicio() {

    // Declaração de variaveis 
    real totalVotos, votosJonas, votosGuilherme, votosBranco,votosNulos,percentualJonas, percentualGuilherme,percentualNulos, percentualbranco

    // Entrada de dados

    escreva("Digite o numero total de votos: ")
    leia(totalVotos)

    escreva("Digite o numero de votos do eleitor Jonas: ")
    leia(votosJonas)

    escreva("Digite o numero de votos do eleitor Guilherme: ")
    leia(votosGuilherme)

    escreva("Digite o numero de votos em branco: ")
    leia(votosBranco)

    escreva("Digite o numero de votos nulos: ")
    leia(votosNulos)


    // Processamento de dados 

    percentualJonas = (votosJonas / totalVotos) * 100
    percentualGuilherme = (votosGuilherme / totalVotos) * 100
    percentualbranco = (votosBranco / totalVotos) * 100 
    percentualNulos = (votosNulos / totalVotos) * 100 

    escreva("A porcentagem de votos do candidato Jonas é:",percentualJonas,"%", "\nA porcentagem de votos do candidato Guilherme é: ",percentualGuilherme,"%", "\nA porcentagem de votos em branco é: ",percentualbranco,"%", "\nA porcentagem de votos nulos é:", percentualNulos,"%")






  }
}
