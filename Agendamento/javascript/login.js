document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('login-usuario');
    const passwordInput = document.getElementById('login-senha');
    const usernameErrorText = document.getElementById('username-error');
    const passwordErrorText = document.getElementById('password-error-text');

    usernameInput.classList.remove('error');
    usernameInput.classList.add('correct');
    usernameErrorText.classList.remove('visible');
    passwordErrorText.classList.remove('visible');
    // ***********************************************************************************
    usernameInput.classList.remove('error');
    usernameErrorText.classList.remove('visible');

    // ***********************************************************************************

    // Evento de clique no botão "Fazer login"
    document.getElementById('btnLogin').addEventListener('click', function () {
// ***********************************************************************************
// Validação do campo de usuário
        const usuario = usernameInput.value.trim();
        if (usuario === '' || usuario.length < 4) {
            usernameInput.classList.add('error');
            usernameErrorText.classList.add('visible');


            
            return; // Impede o envio do formulário se o usuário estiver em branco
        } else {
            usernameInput.classList.remove('error');
            usernameErrorText.classList.remove('visible');
        }
// ***********************************************************************************
// ************************************************************************************************************************

// Verificação da senha (substitua pela sua lógica de verificação)
        if (passwordInput.value === '123456') {
            passwordInput.classList.remove('error');
            passwordErrorText.classList.remove('visible');
            // Aqui, você pode adicionar a lógica de redirecionamento após o login bem-sucedido
            console.log('Login bem-sucedido');

            // const btnLogin = document.getElementById('btnLogin');            
            // btnLogin.addEventListener('click', function () {
            //     // Redirecionar para a página Cadastrese.html
            window.location.href = './calendario.html';
            //   });

        } else {
            passwordInput.classList.add('error');
            passwordErrorText.classList.add('visible');
            console.log('Senha incorreta');
        }
    });
});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Seu código JavaScript aqui

    const btnCadastrese = document.getElementById('btnCadastrese');

    btnCadastrese.addEventListener('click', function () {
      // Redirecionar para a página Cadastrese.html
      window.location.href = 'Cadastrese.html';
    });
  });

// ...

document.getElementById("btnEsqueceu").addEventListener("click", function () {
    // Redirecionar para o formulário de redefinição de senha (substitua 'formulario-redefinicao.html' pelo nome do seu arquivo HTML)
    window.location.href = 'Esqueceu.html';
});

// ************************************************************************************************************************

function validarUsuario() {
    const usernameInput = document.getElementById('login-usuario');
    const usernameErrorText = document.getElementById('username-error');

    const usuario = usernameInput.value.trim();

    if (usuario === '' || usuario.length < 4) {
        usernameInput.classList.add('error');
        usernameErrorText.classList.add('visible');
        return false;
    } else {
        usernameInput.classList.remove('error');
        usernameErrorText.classList.remove('visible');
        return true;
    }
}
