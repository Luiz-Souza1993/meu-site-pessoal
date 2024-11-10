// Adiciona um evento de clique ao botão "Enviar" do formulário
document.querySelector('form').addEventListener('submit', function(event) {
	// Impede que o formulário seja enviado
	event.preventDefault();

	// Obtém os valores dos campos de formulário
	let nome = document.querySelector('#nome').value;
	let email = document.querySelector('#email').value;
	let mensagem = document.querySelector('#mensagem').value;

	// Valida o formulário (neste exemplo, verifica se todos os campos estão preenchidos)
	if (nome === '' || email === '' || mensagem === '') {
		alert('Por favor, preencha todos os campos.');
	} else {
		// Envia os dados do formulário por e-mail (neste exemplo, não faz nada)
		alert('Dados enviados com sucesso!');
	}
});
