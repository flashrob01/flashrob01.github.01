

const API_Endpoint = process.env.NODE_ENV === 'production'
  ? 'https://ddrc-app.herokuapp.com'
  : 'http://localhost:4000';

export default API_Endpoint;