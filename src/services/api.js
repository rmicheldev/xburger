import axios from "axios";

const api = axios.create({
  baseURL: "https://605d074f9386d200171ba209.mockapi.io",
});

export default api;