import {create} from "zustand"; //상태 선언

interface StoreState{
  isloggedIn: boolean;
  storeLogin: (token: string) => void;
  storeLogout: () => void;
};

export const getToken = () => {
  const token = localStorage.getItem('token');//있으면 string, 없으면 null
  return token;
}; 

//아래에서 로그인 했을때 들어온 토큰 setToken할 것(로컬스토리지 저장)
const setToken = (token: string) => {
  localStorage.setItem("token", token);
}

//로그아웃시
export const removeToken = () => {
  localStorage.removeItem("token");
}

export const useAuthStore = create<StoreState>((set) => ({
  isloggedIn: getToken()? true : false, //초기값
  storeLogin: (token:string)=>{
    set({isloggedIn: true});
    setToken(token);
  },
  storeLogout: () => {
    set({isloggedIn: false});
    removeToken();
   
  },
}));