// Peça dois números. Exiba "Valores válidos" se um for positivo e o outro for
// negativo.

function Exerc004(){
    let numero = Number(prompt("Digite um numero:"))
    let numero2 = Number(prompt("Digite outro numero:"))

    if(numero > 0 && numero2 < 0){
        alert("Valores válidos")
    }
    else{
        alert("Valores não validos!")
    }
}