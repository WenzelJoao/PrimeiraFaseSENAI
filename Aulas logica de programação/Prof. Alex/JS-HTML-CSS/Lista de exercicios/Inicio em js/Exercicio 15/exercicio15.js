/*Laboratório de Comparações
História:
Você está testando o comportamento de operadores == e === em uma variável
string e number.
Desafio:
let valor1 = "100";
let valor2 = 100;
Compare com == e === , e explique o resultado com console.log() .*/

let valor1 = "100"
let valor2 = 100

alert("Comparação com ==", valor1 == valor2)
console.log("Explicação ==:", "O operador '==' compara apenas o valor, realizando conversão de tipo se necessário. Neste caso, a string '100' é convertida para o número 100 antes da comparação, resultando em true.")

alert("Comparação com ===", valor1 === valor2)
console.log("Explicação ===:", "O operador '===' compara tanto o valor quanto o tipo. Como 'valor1' é uma string e 'valor2' é um número, mesmo que seus valores sejam aparentemente os mesmos, seus tipos são diferentes, resultando em false.")


