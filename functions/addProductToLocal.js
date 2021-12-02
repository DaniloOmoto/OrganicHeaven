const addProductToLocal = (param) => {
  console.log(param)
  qtdProd = JSON.parse(localStorage.getItem('carrinho'))
  qtdProd.map(item => (item.id == param) ? item.quantidade++ : null)
  localStorage.setItem('carrinho',JSON.stringify(qtdProd))
  window.location.reload();
}