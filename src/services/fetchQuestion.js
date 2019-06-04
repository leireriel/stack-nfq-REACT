const ENDPOINT = 'http://localhost:3003/questions';

const fetchQuestion = () => fetch(ENDPOINT)
  .then(res => res.json())

export {fetchQuestion};