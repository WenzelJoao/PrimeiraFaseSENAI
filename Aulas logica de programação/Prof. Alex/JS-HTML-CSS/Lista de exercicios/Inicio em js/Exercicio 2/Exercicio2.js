/*3. A Pizzaria do Código
História:
João quer pedir pizza, mas só se:
Ele tiver dinheiro e estiver com fome.
Ou se for sexta-feira (porque é tradição!).
Desafio:
let temDinheiro;
let estaComFome;
let hojeEhSexta;
Exiba:
"Vamos pedir pizza!" ou
"Hoje não é dia de pizza."
*/

let temDinheiro = prompt(`João 
    tem dinheiro (Sim ou Não)?`)
let estaComFome = prompt("João esta com fome (sim ou Não)? ")
let hojeEhSexta = prompt("Hoje é sexta-feira (sim ou Não)? ")

if ((temDinheiro === "sim" && estaComFome === "sim") || hojeEhSexta === "sim"){
    console.log ("Vamos pedir pizza!! ")
}
else {
    console.log (`Hoje não é dia de pizza. ${temDinheiro}`)
}