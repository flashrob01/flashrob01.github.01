

const API_Endpoint = process.env.NODE_ENV === 'production'
  ? 'https://sunshine-store.herokuapp.com'
  : 'http://localhost:4000';

export default API_Endpoint;