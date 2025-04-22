/*Lista de Material Escolar
História:
Se a criança for do ensino fundamental, precisa levar lápis. Se for do médio, leva
caneta. Se for outro, leva ambos!
Desafio:
let tipoEnsino = "fundamental";
Use if/else para mostrar o material adequado.*/

let tipoEnsino = prompt("Digite sua escolaridade:\nFundamental:\nMedio:\noutro:");

if (tipoEnsino === "fundamental") {
    alert("Precisa levar lapis! ")
} else if (tipoEnsino === "medio") {
    alert("Precisa levar caneta")
} else {
    alert("Levar ambos")
}
