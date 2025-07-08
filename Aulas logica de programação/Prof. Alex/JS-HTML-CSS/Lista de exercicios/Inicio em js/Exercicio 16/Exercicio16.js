/*Esqui na Montanha
História:
A pista de esqui está liberada apenas para maiores de 16 anos e que tenham
equipamento completo.
Desafio:
let idade;
let temEquipamento;
Exiba:
"Pode esquiar 🎿" ou
"Não liberado."*/

let idade = Number(prompt("digite a sua idade:"))
let temEquipamento = prompt("Você tem o equipamento? ")

if (idade > 16 && temEquipamento === "sim") {
    alert("Pode esquiar 🎿")
} else {
    alert("Não liberado.")
}