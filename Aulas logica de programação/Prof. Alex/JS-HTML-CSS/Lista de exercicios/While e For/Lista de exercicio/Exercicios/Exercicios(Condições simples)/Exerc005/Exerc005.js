// Peça uma nota. Exiba "Aprovado" se a nota for maior que 6 e menor ou igual a
// 10.

function Exerc005(){
    let nota = Number(prompt("Digite a sua nota:"))

    if (nota > 6 && nota <=10){
        alert("Aprovado")
    }
    else if(nota > 10){
        alert("Digite a nota valida (0 a 10)!")
    }
    else{
        alert("Reprovado")
    }

}