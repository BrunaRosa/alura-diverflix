import config from '../../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function insert(values) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  };
  return fetch(URL_CATEGORIES, requestOptions).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();

      return resposta;
    }
    throw new Error("Não foi possível carregar os dados do servidor :(");
  });
}

export default {
  getAllWithVideos,
  getAll,
  insert,
};