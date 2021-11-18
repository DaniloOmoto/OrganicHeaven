const changeCategoryName = async (key) => {

  var requestOptions = {
    "content-type": "application/json",
    method: "GET",
    redirect: "follow",
  };

  const newCategoryName = document.getElementById('newName').value

  console.log(newCategoryName)

  const elem = document.getElementById('option1');
  var categoria = elem.options[elem.selectedIndex].value;

  console.log(categoria)

  const url = (key,id,name) => `http://loja.buiar.com/?key=${key}&c=categoria&t=alterar&f=json&id=${id}&nome=${name}`
  
  try {
    const resp = await fetch(url(key, categoria, newCategoryName), requestOptions)
    window.location.reload();
  } catch (err) {
    throw err;
  }
}