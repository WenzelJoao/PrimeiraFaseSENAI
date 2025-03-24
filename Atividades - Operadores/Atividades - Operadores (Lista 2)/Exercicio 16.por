/*Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem, para veículos (km por litro).
 Para isso, devem ser digitados os dados de distância total percorrida (km) e total de combustível gasto (litros), mostrando o resultado ao final.*/
programa {
  funcao inicio() {

    // Decalração de variaveis 
    real distanciaPercorrida,consumoCombustivel
    inteiro combustivelGasto
    // Entrada de dados
    escreva("Digite a distancia total percorrida(km): ")
    leia(distanciaPercorrida)

    escreva("Quantos litros foram gastos na distancia percorrida: ")
    leia(combustivelGasto)

    // Processamneto de dados

    consumoCombustivel = distanciaPercorrida / combustivelGasto

    // Saida de dados
    escreva("O consumo de combustivel nesse percurso foi: ", consumoCombustivel,"km/L")
  }
}
