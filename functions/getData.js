const getData = async (key, param) => {
  
  //parametro = produto ou categoria
  const url = (chave, parametro) =>
    `http://loja.buiar.com/?key=${chave}&c=${parametro}&t=listar&f=json`;

  var requestOptions = {
    "content-type": "application/json",
    method: "GET",
    redirect: "follow",
  };

  // '{ mode: "no-cors" }' para evitar o erro de CORS
  try {

    const resp = await fetch(url(key, param), requestOptions, { mode: "no-cors" });
    const data = await resp.json();
    return data.dados;

  } catch (err) {
    throw err;
  }

};
