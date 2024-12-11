document.addEventListener("DOMContentLoaded", function () {
    // Espera o carregamento completo do conteúdo HTML da página antes de executar o script

    const form = document.querySelector("form");  // Seleciona o primeiro formulário da página

    // Adiciona um "ouvinte de evento" para o evento de envio (submit) do formulário
    form.addEventListener("submit", function (event) {
        // Obtém os valores dos campos do formulário e remove os espaços em branco extras
        const nome = document.getElementById("nome").value.trim();  // Nome
        const email = document.getElementById("email").value.trim();  // E-mail
        const mensagem = document.getElementById("mensagem").value.trim();  // Mensagem

        // Verifica se algum campo está vazio
        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos!");  // Exibe uma mensagem de alerta
            event.preventDefault();  // Impede o envio do formulário (a página não será recarregada)
        } else {
            alert("Formulário enviado com sucesso!");  // Se tudo estiver preenchido, exibe uma mensagem de sucesso
        }
    });
});
