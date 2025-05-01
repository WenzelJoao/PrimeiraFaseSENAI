/*Contato Alienígena
História:
Você está tentando se comunicar com um alien usando sinais booleanos.
Desafio:
let sinal1 = true;
let sinal2 = false;
Se ambos forem true , envie "Sinal de paz enviado 🛸", senão "Sem contato
estabelecido."*/

let sinal1 = confirm("O primeiro sinal foi respondido?")
let sinal2 = confirm("O segundo sinal foi respondido?")

if (sinal1 === true && sinal2 === true) {
    alert("Sinal de paz enviado 🛸");
} else {
    alert("Sem contato estabelecido.");
}