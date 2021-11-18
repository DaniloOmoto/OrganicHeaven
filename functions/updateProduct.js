const updateProduct = async (key) => {

  var requestOptions = {
    "content-type": "application/json",
    method: "GET",
    redirect: "follow",
  };


  const id = document.getElementById('productid').value
  const codigo = document.getElementById('codigoUpdate').value
  const nome = document.getElementById('nomeUpdate').value
  const descricao = document.getElementById('descricaoUpdate').value
  const preco = document.getElementById('precoUpdate').value
  const imagem = document.getElementById('imagemUpdate').value
  const peso = document.getElementById('pesoUpdate').value

  const url = (key, id, codigo, nome, descricao, preco, imagem, peso) => `http://loja.buiar.com/?key=${key}&c=produto&t=alterar&f=json&id=${id}&codigo=${codigo}&nome=${nome}&descricao=${descricao}&preco=${preco}&imagem=${imagem}&peso=${peso}`
  
  if (!id) {
    alert('Insira um ID válido.')
    return
  }
  
  try {
    const resp = await fetch(url(key, id, codigo, nome, descricao, preco, imagem, peso), requestOptions)
    console.log(url(key, id, codigo, nome, descricao, preco, imagem, peso))
    const data = await resp.json()
    window.location.reload();
  } catch (err) {
    throw err;
  }
}