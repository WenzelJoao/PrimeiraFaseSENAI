/*O Carrinho da Loja
História:
Uma loja só dá desconto se o cliente comprar mais de 3 itens ou se o valor total
for maior que R$ 100.
Desafio:
let quantidadeItens;
let valorTotal;
Mostre:
"Desconto aplicado!" ou
"Sem desconto dessa vez."
*/
let quantidadeItens = Number(prompt("Digite a quantidade de itens: "))
let valortotal = Number(prompt("Digite o valor total da compra: "))

if(quantidadeItens>3 || valortotal>100){
    console.log("Desconto aplicado!")
}
else {
    console.log ("Sem desconto dessa vez. ")
}