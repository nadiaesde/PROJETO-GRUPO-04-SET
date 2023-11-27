// Dicionário simulando usuários (usuário, senha, CPF, CNPJ)
var usuarios = {
    "joao": { "senha": "senha123", "cpf": "12345678900", "cnpj": "12345678000101" },
    "maria": { "senha": "senha456", "cpf": "98765432100", "cnpj": "98765432000101" },
};

function resetPassword() {
    var username = document.getElementById("username").value;
    var cpfOrCnpj = document.getElementById("cpf").value;
    var messageContainer = document.getElementById("message-container");

    if (usuarios[username] && (usuarios[username].cpf === cpfOrCnpj || usuarios[username].cnpj === cpfOrCnpj)) {
       // Gerar uma nova senha temporária
       var new_password = generatePassword();

       // Simular o envio da nova senha em um pop-up
       messageContainer.innerHTML = "Sua nova senha é: " + new_password;
       //alert("Sua nova senha é: " + new_password);
        setTimeout(function () {
            window.location.href = "Login.html";
        }, 5000); // Aguarda 5 segundos (ajuste conforme necessário)

    } else {
        messageContainer.innerHTML = "Usuário não encontrado, CPF ou CNPJ incorretos.";
    }
}

function generatePassword() {
    var length = 8;
    var charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var newPassword = "";

    for (var i = 0; i < length; i++) {
        newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return newPassword;
}
