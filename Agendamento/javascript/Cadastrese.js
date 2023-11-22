const marcaSelect = document.getElementById("veiculo_marca");
const modeloSelect = document.getElementById("veiculo_modelo");
const cpfCnpjInput = document.getElementById("CPF_CNPJ_input");
const emailInput = document.getElementById("email");
const btnSubmit = document.querySelector('button[type=submit]');
// 
var messageContainer = document.getElementById("message-container");
// 

// Dados de modelos por marca
const modelosPorMarca = {
  Ford: ["Fiesta", "Focus", "Mustang"],
  Fiat: ["Uno", "Palio"],
  "General Motors": ["Cruze", "Onix"],
  Volkswagen: ["Golf", "Polo"],
};

// Função para preencher o campo de seleção de modelos com base na marca selecionada
function preencherModelos() {
  const marcaSelecionada = marcaSelect.value;
  modeloSelect.innerHTML = ""; // Limpa as opções anteriores

  if (modelosPorMarca[marcaSelecionada]) {
    modelosPorMarca[marcaSelecionada].forEach((modelo) => {
      const option = document.createElement("option");
      option.value = modelo;
      option.text = modelo;
      modeloSelect.appendChild(option);
    });
  }
}

// Atualize os modelos quando a marca for alterada
marcaSelect.addEventListener("change", preencherModelos);

// Preencha os modelos na inicialização
preencherModelos();
// **************************************************************************************
// Função para validar CPF ou CNPJ
function isValidCpfCnpj(cpfCnpj) {
    cpfCnpj = cpfCnpj.replace(/[^\d]+/g,''); // Remove todos os caracteres não numéricos
  
    if (cpfCnpj.length === 11) {
      // Validação de CPF
      if (cpfCnpj === '00000000000' || cpfCnpj === '11111111111' || cpfCnpj === '22222222222' || cpfCnpj === '33333333333' || cpfCnpj === '44444444444' || cpfCnpj === '55555555555' || cpfCnpj === '66666666666' || cpfCnpj === '77777777777' || cpfCnpj === '88888888888' || cpfCnpj === '99999999999') {
        return false; // CPFs com dígitos iguais são inválidos
      }
  
      let soma = 0;
      let resto;
  
      for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpfCnpj.substring(i-1, i)) * (11 - i);
      }
  
      resto = (soma * 10) % 11;
  
      if ((resto === 10) || (resto === 11)) {
        resto = 0;
      }
  
      if (resto !== parseInt(cpfCnpj.substring(9, 10))) {
        return false;
      }
  
      soma = 0;
      for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpfCnpj.substring(i-1, i)) * (12 - i);
      }
  
      resto = (soma * 10) % 11;
  
      if ((resto === 10) || (resto === 11)) {
        resto = 0;
      }
  
      if (resto !== parseInt(cpfCnpj.substring(10, 11))) {
        return false;
      }
  
      return true;
    } else if (cpfCnpj.length === 14) {
      // Validação de CNPJ
      let tamanho = cpfCnpj.length - 2
      let numeros = cpfCnpj.substring(0,tamanho);
      const digitos = cpfCnpj.substring(tamanho);
      let soma = 0;
      let pos = tamanho - 7;
      for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
          pos = 9;
        }
      }
      let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(0)) {
        return false;
      }
      
      tamanho = tamanho + 1;
      numeros = cpfCnpj.substring(0,tamanho);
      soma = 0;
      pos = tamanho - 7;
      for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
          pos = 9;
        }
      }
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(1)) {
        return false;
      }
      
      return true;
    } else {
      return false;
    }
  }
  
//   return cpfCnpj.trim() !== "";
// }
// *******************************************************************************
// Função para validar e-mail
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault(); // Impede o envio normal do formulário

  // Valide o campo de veículos
  const marca = marcaSelect.value;
  const modelo = modeloSelect.value;

  if (marca === "" || modelo === "") {

    messageContainer.innerHTML = "Selecione uma marca e modelo de veículo.";
//    alert("Selecione uma marca e modelo de veículo.");
    return; // Impede o envio do formulário se os campos de veículos não estiverem preenchidos
  }
  // Valide o campo de e-mail

  const email = emailInput.value;

  if (!isValidEmail(email)) {
    messageContainer.innerHTML = "E-mail inválido. Preencha corretamente.";
//    alert("E-mail inválido. Preencha corretamente.");
    return; // Impede o envio do formulário se o e-mail for inválido
  }
  // Valide o campo CPF/CNPJ
  const cpfCnpj = cpfCnpjInput.value;
  if (!isValidCpfCnpj(cpfCnpj)) {
    messageContainer.innerHTML = "CPF ou CNPJ inválido. Preencha corretamente.";
    //    alert("CPF ou CNPJ inválido. Preencha corretamente.");
    isValidCpfCnpj.focus();     
    return; // Impede o envio do formulário se o CPF/CNPJ for inválido
  }

  // Se chegou até aqui, todos os campos estão preenchidos corretamente
  // Redirecione para a página de calendário
  window.location.href = './calendario.html';
});