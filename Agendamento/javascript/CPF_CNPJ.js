const CPF_CNPJ_input = document.getElementById("CPF_CNPJ_input");
const CPF_CNPJ_Result = document.getElementById("CPF_CNPJ_Result");

// Função para validar CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
  if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  const remainder = sum % 11;
  const digit1 = (remainder < 2) ? 0 : 11 - remainder;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder2 = sum % 11;
  const digit2 = (remainder2 < 2) ? 0 : 11 - remainder2;

  return (parseInt(cpf.charAt(9)) === digit1 && parseInt(cpf.charAt(10)) === digit2);
}

// Função para validar CNPJ
function validarCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
  if (cnpj.length !== 14 || /^(.)\1+$/.test(cnpj)) {
    return false;
  }

  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  let digits = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result !== parseInt(digits.charAt(0))) {
    return false;
  }

  size += 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  return result === parseInt(digits.charAt(1));
}

// Função para validar CPF ou CNPJ
function validarCPFouCNPJ() {
  const cpfCnpjInput = CPF_CNPJ_input.value;
  const cpfCnpjResult = CPF_CNPJ_Result;

  console.log("Valor do campo CPF/CNPJ: " + cpfCnpjInput);


  if (validarCPF(cpfCnpjInput)) {
    cpfCnpjResult.textContent = "CPF válido!";
    cpfCnpjResult.style.color = "green";    
  } else if (validarCNPJ(cpfCnpjInput)) {
    cpfCnpjResult.textContent = "CNPJ válido!";
    cpfCnpjResult.style.color = "green";    
  } else {
    cpfCnpjResult.textContent = "CPF ou CNPJ inválido!";
    cpfCnpjResult.style.color = "red";
    CPF_CNPJ_input.focus();         
  }
}

// Adicione um ouvinte de evento 'blur' para o campo de entrada
CPF_CNPJ_input.addEventListener("blur", validarCPFouCNPJ);
