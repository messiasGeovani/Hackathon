// This is a JavaScript file

// escondendo a sessão de cadastro
$(document).ready(function() {
  $('#cadastro-session').hide();
});

// funçao para redirecionar para a sessão de cadastro
function exibirCadastro() {
  $('#login-session').hide();
  $('#cadastro-session').show();
}

// função para enviar os dados de cadastro
function enviarCadastro() {
  $('#cadastro-session').hide();
  $('#login-session').show();
}

// cancelando cadastro e retornando para atela de login
$(document).on('click', '#cancelar', function() {
  $('#cadastro-session').hide();
  $('#login-session').show();
});