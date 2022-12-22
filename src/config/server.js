const API_Endpoint =
  process.env.NODE_ENV === "production"
    ? "https://www.store.robliou.com"
    : "http://localhost:4000";

export default API_Endpoint;
