cep = window.prompt('Qual seu cep?');

BlogController.getDataCep(cep).then(response => {
  alert('Voce mora na cidade ' + response.localidade + ' na rua ' +response.logradouro);
})