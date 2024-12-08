import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL+ "api/";
const reqEncryption = import.meta.env.VITE_REQ_ENCRYPTION === "true";

const AxiosInstance = axios.create({
  baseURL,
});

AxiosInstance.interceptors.request.use(
  (config) => {
    if (reqEncryption && (config.method === "post" || config.method === "put")) {
      config.data = { enData: CryptoService.encryptForUri(JSON.stringify(config.data)) };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

AxiosInstance.interceptors.response.use(
  (response) => {
    if (reqEncryption && response.data && typeof response.data === "string") {
      response.data = CryptoService.decryptFromUri(response.data);
    }
    return response;
  },
  (error) => Promise.reject(error)
);

export default AxiosInstance;
