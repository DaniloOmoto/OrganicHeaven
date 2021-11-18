const removeCategory = async (key, categoryId) => {

  var requestOptions = {
    "content-type": "application/json",
    method: "GET",
    redirect: "follow",
  };

  const freq = await countCategoryItems();

  const url = (key,id) => `http://loja.buiar.com/?key=${key}&c=categoria&t=remover&f=json&id=${id}`

  if(Object.keys(freq).includes(categoryId.toString())) {
    alert('A categoria não está vazia.')
    return
  }

  if (confirm(`Deseja apagar a categoria de ID:${categoryId}?`)) {
  try {
    const resp = await fetch(url(key,categoryId), requestOptions)
    window.location.reload();
  } catch (err) {
    throw err;
  }
  } else {return}
}