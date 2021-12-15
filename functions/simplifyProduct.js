const simplifyProduct = async (prom) => {
  
    try {
    const produtos = await prom;
  
    produtos.forEach(item => {
      /* console.log(item) */
      var produto = document.createElement('div');
      var valor = (item.preco).replace('.', ',');

  
      produto.innerHTML = `
      <p style='text-align: center; margin-bottom: 10px'><strong>${item.nome}</strong></p>
      <p><strong>Preço:</strong> R$${valor}</p>
      <img class='productImage' src=${item.imagem} data-nome=${item.nome} data-preco=${item.preco} width=150" height="70" dragable=true ondragstart="drag(event)" id=${item.id}>
      `;
      document.getElementById('productListSimp').appendChild(produto);
    });
  
    } catch (err) {
      var produto = document.createElement('div')
      produto.innerHTML = `<p>Ops, algo deu errado.</p>`;
      document.getElementById('productListSimp').appendChild(produto);
    }
  
  };