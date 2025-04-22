/*5.11// Crie um programa para ler o número de lados de um polígono
regular e a medida do lado em cm. Calcular e mostrar o seguinte:
- Se o número de lados for 3, escrever “TRIÂNGULO” e o valor da área;
- Se o número de lados for 4, escrever “QUADRADO” e o valor da área;
- Se o número de lados for 5, escrever “PENTÁGONO”.
*/

programa {
  funcao inicio() {
      inteiro numeroLados
      real medidaLado, area

   escreva("Digite o número de lados do polígono: ")
   leia(numeroLados)

   escreva("Digite a medida do lado em cm: ")
   leia(medidaLado)

   

   se (numeroLados == 3){
    area = (medidaLado * medidaLado * raizq(3)) / 4

    escreva("Area ",area,"cm")
   }
   se (numeroLados == 4){
    area = (medidaLado * medidaLado)
    escreva("\nÁrea ",area,"cm")
    escreva("\nPENTÁGONO")
   }

   se (numeroLados == 5){
    area = (medidaLado * medidaLado)
    escreva("\nÁrea ",area,"cm")
    escreva("\nPENTÁGONO")

   }
  }
}
