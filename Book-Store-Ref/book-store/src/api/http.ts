import axios, { AxiosRequestConfig } from "axios" 
import { getToken, removeToken } from "../store/authStore";

const BASE_URL = "http://localhost:9999";
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: { //이건 이미 서버랑 약속함
      "content-type": "application/json", //json을 통해 content교환하겠다
      Authorization: getToken()? getToken() : "",
    },
    withCredentials: true, 
    ...config, //parameter로 전달된 config
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      //로그인 만료 처리
      if(error.response.status === 401){ //로그인 토큰 만료
        //토큰 제거 후, 로그인으로 보내줘야 함
        removeToken();
        window.location.href = "/login"; //navi쓸수 X
        return;
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

//실제 모듈의 httpClient
export const httpClient = createClient();