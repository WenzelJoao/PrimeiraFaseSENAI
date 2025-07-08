/*Passeio com o Pet
História:
Você só vai passear com seu cachorro se não estiver chovendo e se tiver tempo.
Desafio:
let estaChovendo;
let temTempo;
Exiba:
"Hora do passeio! 🐾" ou
"Hoje não vai dar... ☔"*/

let estaChovendo = prompt("Está chovendo? ")
let temTempo = prompt("Tenho tempo?")

if (estaChovendo === "não" && temTempo === "sim") {
    alert("Hora do passeio! 🐾")
} else {
    alert("Hoje não vai dar... ☔")
}