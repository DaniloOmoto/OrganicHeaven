const postCategory = async (key) => {

  var requestOptions = {
    "content-type": "application/json",
    method: "GET",
    redirect: "follow",
  };

  const categoryName = document.getElementById('categoryname').value

  const url = (key, name) => `http://loja.buiar.com/?key=${key}&c=categoria&t=inserir&f=json&nome=${name}`
  
  try {
    const resp = await fetch(url(key, categoryName), requestOptions)
    const data = resp.json()
    window.location.reload();
  } catch (err) {
    throw err;
  }
}