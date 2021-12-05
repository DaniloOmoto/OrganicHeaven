const substractProductFromLocal = (param) => {
  console.log(param)
  qtdProd = JSON.parse(localStorage.getItem('carrinho'))
  if (qtdProd.find(v => v.id == param).quantidade > 1) {
    qtdProd.map(item => (item.id == param) ? item.quantidade-- : null)
    localStorage.setItem('carrinho',JSON.stringify(qtdProd))
    window.location.reload();
  } else {
    if (confirm(`Deseja remover o produto do carrinho?`)){
      deleteProductFromLocal(param)
      window.location.reload();
    }
  }
  
  
}