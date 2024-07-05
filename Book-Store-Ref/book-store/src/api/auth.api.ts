import { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

export const signup = async(userData: SignupProps) => {//엔드포인트에 전달
  //userData: signup Component에서 작성했던 Signup Props이용할 것임
  const response = await httpClient.post("/users/join", userData);
  return response.data; //응답없이 올 경우 리턴값
};

export const resetRequest= async(data: SignupProps) => {
  //email만 넘어올거임
  const response = await httpClient.post("/users/reset", data);
  return response.data; //응답없이 올 경우 리턴값
};

export const resetPassword = async(data: SignupProps) => {
  //email만 넘어올거임
  const response = await httpClient.put("/users/reset", data);
  return response.data; //응답없이 올 경우 리턴값
};

//백엔드 토큰 받기
interface LoginResponse{
  token: string;
}

export const login = async(data: SignupProps) => {
  //email만 넘어올거임
  const response = await httpClient.post<LoginResponse>("/users/login", data);
  return response.data; //응답없이 올 경우 리턴값
};
