/*5.3 – Mano Juca enfrenta o rodízio de carros de São Paulo;
Faça um algoritmo que leia o último número da placa do carro e mostre o
dia em que ele não pode rodar pela cidade de São Paulo.
Final 0 ou 1: não pode rodar na segunda-feira;
Final 2 ou 3: não pode rodar na terça-feira;
Final 4 ou 5: não pode rodar na quarta-feira;
Final 6 ou 7: não pode rodar na quinta-feira;
Final 8 ou 9: não pode rodar na sexta-feira.*/
programa {
  funcao inicio() {
    inteiro ultimoNumeroPlaca
    escreva("Digite o ultimo numero da sua placa: ")
    leia(ultimoNumeroPlaca)

    limpa()

    se(ultimoNumeroPlaca == 0 ou ultimoNumeroPlaca == 1){

    escreva("Você não pode rodar na segunda-feira ")

    }

   se(ultimoNumeroPlaca == 2 ou ultimoNumeroPlaca == 3){

    escreva("Você não pode rodar na terça-feira ")

    }

    se(ultimoNumeroPlaca == 4 ou ultimoNumeroPlaca == 5){

    escreva("Você não pode rodar na quarta-feira ")

    }

    se(ultimoNumeroPlaca == 6 ou ultimoNumeroPlaca == 7){

    escreva("Você não pode rodar na quinta-feira ")

    }

    se(ultimoNumeroPlaca == 8 ou ultimoNumeroPlaca == 9){

    escreva("Você não pode rodar na sexta-feira ")

    }
    

  }
}
