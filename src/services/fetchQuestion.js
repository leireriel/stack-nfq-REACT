const ENDPOINT = ' http://localhost:3001/questions';
// const ENDPOINT = 'https://adalab.nfqsolutions.es/api/questions';

const fetchQuestion = () => fetch(ENDPOINT).then(res => res.json());

export { fetchQuestion };
