import axios from "axios";
export const capMarketServer = axios.create({
  baseURL: "http://localhost:3000/user",
  // withCredentials: true,
});

