// This is a JavaScript file

$(document).ready(function() {
  $('#formularioPerfil').hide();
});

// função para exibir opção de salvar foto
function infoPerfil() {
  if ($('input').val() != '') {
    $('#formularioTexto').hide();
    $('#formularioPerfil').show();
  } else {
    navigator.notification.alert('preencha os campos!', null, 'Atenção!');
  }
}

// cancelando cadastro e retornando para atela de login
$(document).on('click', '#cancelar', function() {
  $(location).attr('href', 'index.html');  
});