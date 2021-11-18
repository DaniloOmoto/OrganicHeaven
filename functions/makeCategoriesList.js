const makeCategoriesList = async (prom) => {
  
  try {

  const categorias = await prom;
  const categoriasFreq = await countCategoryItems();

  categorias.forEach(item => {
    var categoria = document.createElement('div')
    categoria.innerHTML = 
    `<p>${item.id} - ${item.nome} - ${categoriasFreq[item.id] ? (categoriasFreq[item.id] > 1 ? `${categoriasFreq[item.id]} itens` : '1 item') : '0 item'} <i class="fa fa-trash fa-2x lixo" onclick="removeCategory('viaVccxFfa',${item.id})"></i></p>`;
    document.getElementById('categoryList').appendChild(categoria);
  });

  } catch (err) {
    var categoria = document.createElement('div')
    categoria.innerHTML = `<p>Ops, algo deu errado.</p>`;
    document.getElementById('categoryList').appendChild(categoria);
  }

};
