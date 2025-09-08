document.getElementById("cep").addEventListener("blur", () => {
  let cep = document.getElementById("cep").value;
  if (cep.length !== 8) {
    alert("CEP Invalido");
    limpaCampo();
    return;
  }

  let url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.erro) {
        limpaCampo();
        return;
      }
      document.getElementById("rua").value = data.logradouro;
      document.getElementById("bairro").value = data.bairro;
      document.getElementById("cidade").value = data.localidade;
      document.getElementById("uf").value = data.uf;
    })

    .catch((error) => {
      console.error("Erro ao buscar o CEP: ", error);
    });
});

document
  .getElementById("form-endereco")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let dadosEndereco = {
      cep: document.getElementById("cep").value,
      logradouro: document.getElementById("rua").value,
      complemento: document.getElementById("complemento").value,
      numero: document.getElementById("numero").value,
      bairro: document.getElementById("bairro").value,
      cidade: document.getElementById("cidade").value,
      uf: document.getElementById("uf").value,
    };
    console.log(dadosEndereco);
  });

const json = JSON.stringify(dadosEndereco);

function limpaCampo() {
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("uf").value = "";
}
