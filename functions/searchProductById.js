const searchProductById = async (key, id) => {

  var requestOptions = {
    "content-type": "application/json",
    method: "GET",
    redirect: "follow",
  };

  const url = (key, id) => `http://loja.buiar.com/?key=${key}&c=produto&t=listar&f=json&id=${id}`

  try {
    const resp = await fetch(url(key, id), requestOptions)
    const data = await resp.json()
    const item = data.dados[0]
    if (item) {
      document.getElementById('codigoUpdate').value = item.codigo;
      document.getElementById('nomeUpdate').value = item.nome;
      document.getElementById('descricaoUpdate').value = item.descricao;
      document.getElementById('precoUpdate').value = item.preco;
      document.getElementById('imagemUpdate').value = item.imagem;
      document.getElementById('pesoUpdate').value = item.peso;
    } else {
      document.getElementById('codigoUpdate').value = '';
      document.getElementById('nomeUpdate').value = '';
      document.getElementById('descricaoUpdate').value = '';
      document.getElementById('precoUpdate').value = '0.00';
      document.getElementById('imagemUpdate').value = '';
      document.getElementById('pesoUpdate').value = '0.00';
    }
    
  } catch (err) {
    throw err;
  }

}