const makeProductsList = async (prom) => {
  
  try {
  const produtos = await prom;

  produtos.forEach(item => {
    /* console.log(item) */
    var produto = document.createElement('div')
    produto.innerHTML = `
    <i class="fa fa-trash fa-2x lixo" onclick="removeProduct('viaVccxFfa',${item.id})"></i>
    <p><strong>ID:</strong> ${item.id}</p>
    <p><strong>Código:</strong> ${item.codigo}</p>
    <p><strong>Categoria:</strong> ${item.categoria}</p>
    <p><strong>Nome:</strong> ${item.nome}</p>
    <p><strong>Descrição:</strong> ${item.descricao}</p>
    <p><strong>Preço:</strong> R$${item.preco}</p>
    <p><strong>Peso:</strong> ${item.peso}Kg</p>
    <img class='productImage' src=${item.imagem} width=150" height="70">
    `;
    document.getElementById('productList').appendChild(produto);
  });

  } catch (err) {
    var produto = document.createElement('div')
    produto.innerHTML = `<p>Ops, algo deu errado.</p>`;
    document.getElementById('productList').appendChild(produto);
  }

};
