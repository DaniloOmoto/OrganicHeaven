const deleteProductFromLocal = (param) => {
  qtdProd = JSON.parse(localStorage.getItem('carrinho'))
  if (confirm(`Deseja remover o produto do carrinho?`)){
    localStorage.setItem('carrinho',JSON.stringify(qtdProd.filter(item => item.id != param)))
    window.location.reload();
  }
}