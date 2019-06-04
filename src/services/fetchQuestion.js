const ENDPOINT = 'http://adalab.nfqsolutions.es:3001/questions';

const fetchQuestion = () => fetch(ENDPOINT)
  .then(res => res.json())

export {fetchQuestion};