//repete enquanto o usuario não tiver idade minima ou
//não aceita os termos 

let idademinima = 0
let aceitoutermos = false

while( !aceitoutermos || idademinima <= 18){
    idademinima = Number(prompt("Qual a sua idade? "))
    let resposta = prompt(" Aceita oo termo? Sim ou Não")
    if(resposta === "Sim") aceitoutermos = true
}

alert("Você está inscrito!")