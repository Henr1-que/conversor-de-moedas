// Seleção dos elementos do HTML
const valorUsuario = document.querySelector("#valor");
const moedaUsuario = document.querySelector("#moedas");
const btn = document.querySelector("#btn");
const divContainer = document.querySelector(".container");
const divRes = document.querySelector(".display-res");

// Adiciona o evento de clique ao botão
btn.addEventListener("click", pegarMoeda);

function pegarMoeda() {
    const moeda = moedaUsuario.value;

    if (moeda === "default") {
        alert("Por favor, selecione uma moeda!");
        return;
    }

    // Requisição para a API passando a moeda selecionada dinamicamente
    fetch(`https://economia.awesomeapi.com.br/last/${moeda}`)
        .then((response) => response.json())
        .then((data) => {
            displayResultado(data, moeda);
        });
}