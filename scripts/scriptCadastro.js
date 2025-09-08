document
  .getElementById("form-cadastro")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const dadosCadastro = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      cpf: document.getElementById("cpf").value,
      telefone: document.getElementById("telefone").value,
      senha: document.getElementById("senha").value,
    };
    console.log(dadosCadastro);
  });

const json = JSON.stringify(dadosCadastro);
