const ENDPOINT = 'https://adalab.nfqsolutions.es/api/questions';

const fetchQuestion = () => fetch(ENDPOINT).then(res => res.json());

export { fetchQuestion };
