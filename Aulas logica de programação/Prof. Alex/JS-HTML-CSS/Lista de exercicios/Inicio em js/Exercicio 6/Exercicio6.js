/*Missão: Planeta JavaScript
História:
Você é um astronauta tentando pousar no Planeta JavaScript. A nave só pousa se
o combustível for maior que 50 e o clima for "bom".
Desafio:
let combustivel;
let clima;
Exiba:
"Pouso autorizado!" ou
"Abortar missão!"
*/

let combustivel = Number(prompt("Digite a quantidade de combustivel que ainda resta na nave: "))
let clima = prompt("como esta o clima (Ruim ou bom) ")

if (combustivel>50 && clima === "bom"){
    console.log ("Pouso autorizado!")
}
else {
    console.log ("Abortar missão!")
    
}
