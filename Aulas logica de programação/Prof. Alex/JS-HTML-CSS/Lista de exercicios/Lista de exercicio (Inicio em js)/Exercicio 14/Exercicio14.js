/*MasterChef Lógico
História:
Você precisa preparar um prato especial se o ingrediente principal ou o tempero
secreto estiver disponível.
Desafio:
let temIngredientePrincipal;
let temTemperoSecreto;
Exiba:
"Prato especial pronto! 🍽" ou
"Sem os ingredientes necessários. 😕"*/

let temIngredientePrincipal = prompt("O prato especial está disponivel?")
let temTemperoSecreto = prompt("O tempero secreto está disponivel?")

if (temIngredientePrincipal === "sim" || temTemperoSecreto === "sim") {
    alert("Prato especial pronto! 🍽")
} else {
    alert("Sem os ingredientes necessários. 😕")
}