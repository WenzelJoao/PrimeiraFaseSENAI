/*Poção Misteriosa
História:
Para preparar uma poção, o bruxo precisa misturar exatamente dois ingredientes
certos.
Desafio:
let ingrediente1 = "pele de sapo";
let ingrediente2 = "asa de morcego";
Verifique se os ingredientes são exatamente esses. Se forem, diga "Poção
pronta!", senão "Mistura errada!"*/

let ingrediente1 = prompt("Digite o primeiro ingrediante: ")
let ingrediente2 = prompt("Digite o segundo ingrediante: ")

if (ingrediente1 === "pele de sapo" && ingrediente2 === "asa de morcego"){
    alert("Poção pronta!")
}else{
    alert("Mistura errada!")
}
