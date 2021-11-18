const makeSelect = async (strId) => {

  try {

  const categorias = await getData('viaVccxFfa','categoria');

  categorias.forEach(element => {
    var option = document.createElement('option')
    option.setAttribute("value", element.id)
    option.innerHTML = `${element.id} - ${element.nome}`;
    document.getElementById(strId).appendChild(option);
  });

  } catch (err) {
    throw err;
  }
}