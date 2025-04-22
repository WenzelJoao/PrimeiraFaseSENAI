 //Programar as seguintes entradas de dados de um cliente: Nome, idade, nacionalidade, endereço. Após digitados os dados, mostrar na tela a seguinte 
 //mensagem "Cliente [Nome], [idade] anos, [nacionalidade], reside no endereço [endereço]." Exemplo: Cliente Lucas, 29 anos, brasileiro, reside no 
 //endereço Rua Victor Meirelles, 281, Centro, Florianópolis.

programa {
  funcao inicio() {


    // Declaração de variaveis 
    cadeia nome, nacionalidade, endereco
    inteiro idade

    // Entrada de dados
    escreva("Qual o seu nome? ")
    leia (nome) 

    escreva("Qual a sua idade? ")
    leia(idade)

    escreva("Qual a sua nacionalidade ? ")
    leia(nacionalidade)

    escreva("Qual o seu endereço? ")
    leia(endereco)

    escreva("cliente ",nome,", ",idade," Anos",", ",nacionalidade,", ","Reside no endereço ",endereco,". ")
  }
}
