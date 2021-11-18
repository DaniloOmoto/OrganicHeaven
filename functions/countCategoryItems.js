//conta o n° de items em cada categoria

const countCategoryItems = async () => {

  try {

    const categoryArray = [];

    const prom = getData('viaVccxFfa','produto')

    const produtos = await prom;

    /* console.log(produtos) */

    produtos.forEach(item => {
      categoryArray.push(item.categoria);
    });

    /* console.log(categoryArray) */

    const freq = {}

    for (const num of categoryArray) {
      freq[num] = freq[num] ? freq[num] + 1 : 1;
    }

    /* console.log(freq) */

    return freq;

  } catch (err) {
    throw err;
  }

}