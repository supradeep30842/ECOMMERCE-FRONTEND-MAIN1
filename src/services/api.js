import axios from "axios";

const API = axios.create({
  baseURL: "http://ecommerce-backend-main1-production.up.railway.app"
});

export default API;
