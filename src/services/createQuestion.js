const ENDPOINT = 'https://adalab.nfqsolutions.es/api/questions';

const createQuestion = question => {
  return fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(question),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
};

export {createQuestion};