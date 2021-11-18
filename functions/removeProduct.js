const removeProduct = async (key, productId) => {

  var requestOptions = {
    "content-type": "application/json",
    method: "GET",
    redirect: "follow",
  };

  const url = (key, id) => `http://loja.buiar.com/?key=${key}&c=produto&t=remover&f=json&id=${id}`

  if (confirm(`Deseja apagar o produto de ID:${productId}?`)) {
  try {
    const resp = await fetch(url(key, productId), requestOptions)
    window.location.reload();
  } catch (err) {
    throw err;
  }
} else {return}
}