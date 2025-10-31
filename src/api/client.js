import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response) throw err.response.data;
    throw err;
  }
);

export default api;
