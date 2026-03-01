//base urls on admin part
import axios from "axios";
import { getToken, removeToken } from "../utils/getTocken";
export const apiServer = axios.create({
  baseURL: "http://localhost:3000/admin",
  // withCredentials: true,
});
const logout = async () => {
  try {
    await apiServer.post("/admin-auth/logOut/");
  } catch (e) {
    console.log(e);
  } finally {
    removeToken()
    delete apiServer.defaults.headers.common["Authorization"];
    window.location.href = "/login";
  }
};
const capMarketServerHeaders = (config: any) => {
  config.headers["User-Type"] = "Admin";
  const token = getToken();
  if (token && config.url !== "login/" && config.url !== "verify-otp/") {
    config.headers["Authorization"] = `Bearer ${token}`;
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
  }
  return config;
};
const handle401Error = (error: any) => {
  if (error.response && error.response.status === 401) {
    logout();
  }
  return Promise.reject(error);
};
apiServer.interceptors.request.use(capMarketServerHeaders);
apiServer.interceptors.response.use(
  (response) => response,
  handle401Error
);
