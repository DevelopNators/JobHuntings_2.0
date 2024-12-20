import axios from "axios";
import cryptoService from "./CryptoService";

const baseURL = import.meta.env.VITE_BASE_URL+ "api/";
const reqEncryption = import.meta.env.VITE_REQ_ENCRYPTION === "true";

const AxiosInstance = axios.create({
  baseURL,
});

AxiosInstance.interceptors.request.use(
  (config) => {
    if (reqEncryption && (config.method === "post" || config.method === "put")) {
      config.data = { enData: cryptoService.encryptForUri(config.data) };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

AxiosInstance.interceptors.response.use(
  (response) => {
    if (reqEncryption && response.data && typeof response.data === "string") {
      response.data = cancelAnimationFrameryptoService.decryptFromUri(response.data);
    }
    return response;
  },
  (error) => Promise.reject(error)
);

export default AxiosInstance;
