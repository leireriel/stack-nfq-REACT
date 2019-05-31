const ENDPOINT = ' http://localhost:3001/questions';

const fetchQuestion = () => fetch(ENDPOINT)
  .then(res => res.json())

export {fetchQuestion};