const ENDPOINT = 'http://adalab.nfqsolutions.es:3001/questions';

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