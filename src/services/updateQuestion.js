const ENDPOINT = 'https://adalab.nfqsolutions.es/api/questions/';

const updateQuestion = question => {
  return fetch(`${ENDPOINT}${question.id}`, {
    method: 'PUT',
    body: JSON.stringify(question),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
};

export { updateQuestion };
