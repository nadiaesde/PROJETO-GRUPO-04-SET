const marcaSelect = document.getElementById("veiculo_marca");
const modeloSelect = document.getElementById("veiculo_modelo");

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

// ****************************************************** validar email

  const emailInput = document.getElementById("email");
  emailInput.addEventListener("blur", function() {
    const email = emailInput.value;


  if (!isValidEmail(email)) {
    emailInput.textContent = "CPF ou CNPJ inválido!";
    emailInput.style.color = "red";
    emailInput.focus();         
    }
  });

  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  document.getElementById("meuForm").onsubmit = function() {
  // Redirecionar para a página de destino
  window.location.href = './calendario.html';  
  return false; // Isso impede o envio normal do formulário
};
