import axios from "axios";
export const capMarketServer = axios.create({
  baseURL: "http://localhost:3000/admin",
  withCredentials: true,
});

