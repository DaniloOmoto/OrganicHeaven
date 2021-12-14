
if (localStorage.getItem('carrinho')) {
  console.log('existe um localstorage chamado carrinho')
  qtdProd = JSON.parse(localStorage.getItem('carrinho'))
  console.log(qtdProd)

  qtdProd.forEach(item => {
    var produto = document.createElement('div')
    produto.innerHTML = `
    <i class="fa fa-trash fa-2x lixo" onclick="deleteProductFromLocal(${item.id})"></i>
    <i class="fa fa-plus fa-2x" onclick="addProductToLocal(${item.id})"></i>
    <i class="fa fa-minus fa-2x" onclick="substractProductFromLocal(${item.id})"></i>
    <p style='text-align: center; margin-bottom: 10px'><strong>${item.nome}</strong></p>
    <p><strong>Preço unitário:</strong> R$${item.preco}</p>
    <p><strong>Quantidade:</strong> ${item.quantidade}</p>
    <p><strong>Preço total:</strong> R$${item.preco*item.quantidade}</p>
    <img class='productImage' src=${item.img} width=150" height="70">
    `;
    document.getElementById('carrinho').appendChild(produto);
  });
}