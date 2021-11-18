const postProduct = async (key) => {

  var requestOptions = {
    "content-type": "application/json",
    method: "GET",
    redirect: "follow",
  };

  const elem = document.getElementById('option2');
  var categoria = elem.options[elem.selectedIndex].value;
  const codigo = document.getElementById('codigo').value
  const nome = document.getElementById('nome').value
  const descricao = document.getElementById('descricao').value
  const preco = document.getElementById('preco').value
  const imagem = document.getElementById('imagem').value
  const peso = document.getElementById('peso').value

  const url = (key, categoria, codigo, nome, descricao, preco, imagem, peso) => `http://loja.buiar.com/?key=${key}&c=produto&t=inserir&f=json&categoria=${categoria}&codigo=${codigo}&nome=${nome}&descricao=${descricao}&preco=${preco}&imagem=${imagem}&peso=${peso}`
  
  try {
    const resp = await fetch(url(key, categoria, codigo, nome, descricao, preco, imagem, peso), requestOptions)
    const data = await resp.json()
    window.location.reload();
  } catch (err) {
    throw err;
  }
}