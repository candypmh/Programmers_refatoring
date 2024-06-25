import axios, { AxiosRequestConfig } from "axios" 

const BASE_URL = "http://localhost:9999";
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: { //이건 이미 서버랑 약속함
      "content-type": "application/json", //json을 통해 content교환하겠다
    },
    withCredentials: true, 
    ...config, //parameter로 전달된 config
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

//실제 모듈의 httpClient
export const httpClient = createClient();