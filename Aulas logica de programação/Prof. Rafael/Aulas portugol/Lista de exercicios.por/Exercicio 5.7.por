/*5.7// Nosso amigo Mano Juca ganhou tanto dinheiro no Uber que resolveu
tirar férias. Sem destino, sem regras, vida loka, lobo solitário, sem
destino, um dia em cada lugar, sem dia pra voltar, até o dinheiro
acabar...
Logo nos primeiros dias ele encontrou um paraíso e resolveu quebrar sua
única regra e ficar alguns dias por ali. Encontrou um albergue meio bom
e fez check in, mas não conseguiu entender de forma alguma como o hotel
calculava o valor da conta. Ele é meio burro, vocês sabem...
O albergue utilizas faixas de preço de acordo com o número de diárias
Até 5 diárias, o preço por diária é R$100,00;
De 6 a 10 diárias, R$90,00 por dia;
A partir de 11 dias, sai R$80,00 por dia;
Outros fatos relevantes para determinar o valor da conta:
- Ele acabou ganhando um desconto a mais de 10% do valor total porque
teve um “envolvimento emocional” com a moça que trabalha no balcão;
- Quando ele abriu a carteira pra pagar, a moça viu que ele tem a
carteirinha da Associação dos motoristas do Uber de Palhoça, entidade
com a qual o albergue tem convênio, e aplicou mais 15% (do valor total)
de desconto;
- Ele se passou e vai pagar multa de R$150 por danos materiais.
Criar um programa que lê o número de dias que ele vai ficar no albergue
e apresente o valor final da conta e sua composição (os detalhes,
pagamentos, descontos...);
*/
programa {
  funcao inicio() {
    inteiro diarias,valorDiarias,valorMulta = 150
    real contaValorComDesconto,valorDiariasComDesconto,descontoEnvolvimentoEmocional = 0.10, descontoConvenioUber = 0.15
    real valorComMultaDanosMateriais,totalDescontoConvenioUber,totaldDescontoEnvolvimentoEmocional
    escreva("Digite a quantidade de diarias que você vai ficar: ")
    leia(diarias)

    se (diarias <= 5){
      valorDiarias = diarias * 100
    }
    
      
     se (diarias>=6 e diarias<=10){
      valorDiarias = diarias * 90
     }

     se (diarias>=11){
      valorDiarias = diarias * 80
     }
     
     totaldDescontoEnvolvimentoEmocional = descontoEnvolvimentoEmocional * valorDiarias
     totalDescontoConvenioUber = descontoConvenioUber * valorDiarias
     contaValorComDesconto = (descontoConvenioUber + descontoEnvolvimentoEmocional) * valorDiarias
     valorDiariasComDesconto = valorDiarias - contaValorComDesconto 
     valorComMultaDanosMateriais = (valorDiariasComDesconto + valorMulta)
     
  
    limpa()

    escreva("\nDiarias: ",diarias)
    escreva("\nSubtotal: R$",valorDiarias)
    escreva("\nDesconto: R$",totalDescontoConvenioUber)
    escreva("\nDesconto: R$",totaldDescontoEnvolvimentoEmocional)
    escreva("\nMulta: R$",valorMulta)
    escreva("\nValor total: R$",valorComMultaDanosMateriais)

  
    
  }
}
