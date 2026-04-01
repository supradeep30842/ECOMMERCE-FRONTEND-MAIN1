import axios from "axios";

const API = axios.create({
  baseURL: "https://metro.proxy.rlwy.net:24563/railway"
});

export default API;
