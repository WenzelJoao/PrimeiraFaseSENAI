// Solicite um nome de usuário e uma senha. Exiba "Acesso permitido" se o
// nome for "admin" ou a senha for "1234".


function logar() {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if(login === "admin" && senha === "1234"){
        alert("Acesso permitido!")
    }
    else{
        alert("Acesso negado!")
    }

}