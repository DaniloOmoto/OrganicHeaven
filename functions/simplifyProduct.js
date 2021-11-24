const simplifyProduct = async (prom) => {
  
    try {
    const produtos = await prom;
  
    produtos.forEach(item => {
      /* console.log(item) */
      var produto = document.createElement('div');

  
      produto.innerHTML = `
      <p><strong>Nome:</strong> ${item.nome}</p>
      <p><strong>Preço:</strong> R$${item.preco}</p>
      <img class='productImage' src=${item.imagem} width=150" height="70" dragable=true ondragstart="drag(event)" id=${item.id}>
      `;
      document.getElementById('productListSimp').appendChild(produto);
    });
  
    } catch (err) {
      var produto = document.createElement('div')
      produto.innerHTML = `<p>Ops, algo deu errado.</p>`;
      document.getElementById('productListSimp').appendChild(produto);
    }
  
  };