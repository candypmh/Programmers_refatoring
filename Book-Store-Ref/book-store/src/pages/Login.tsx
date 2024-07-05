import { styled } from 'styled-components';
import Title from '../components/common/Title';
import InputText from '../components/common/InputText';
import Button from '../components/common/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { login, signup } from '../api/auth.api';
import { useAlert } from '../hooks/useAlert';
import { SignupStyle } from './Signup';
import { useAuthStore } from '../store/authStore';

export interface SignupProps {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate(); 
  const showAlert = useAlert();

  const{ isloggedIn, storeLogin, storeLogout} = useAuthStore();

  const {
    register, handleSubmit, formState: {errors}, 
  } = useForm<SignupProps>();

  const onSubmit = (data: SignupProps) => { //data는 약속된거
    //로그인 패쳐 필요
    login(data).then((res) => { //res: auth.api.ts의 response.data
      // console.log(res.token);

      //상태 변화
      storeLogin(res.token);//성공시 ->  토큰받음
      showAlert("로그인 완료되었습니다.");
      navigate("/");
    }, (error) => { //실패시 처리
      showAlert("로그인이 실패하였습니다.");
    });
};

  // console.log(isloggedIn);

  return (
    <>
    {/* //공통 컴포넌트 불러오기 */}
    <Title size="large">로그인</Title>
    <SignupStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <InputText placeholder="이메일" inputType="email" {...register("email", {required: true})}/>   {/*e는 event*/}
          {errors.email && <p className="error-text">이메일을 입력해주세요.</p>}
        </fieldset>
        <fieldset>
          <InputText placeholder="비밀번호" inputType="password" {...register("password", {required: true})}/>
          {errors.password && <p className="error-text">비밀번호를 입력해주세요.</p>}
        </fieldset>
        <fieldset>
          <Button type="submit" size="medium" scheme="primary" disabled= {false} isLoading={false}>로그인</Button>
        </fieldset>
        <div className="info">
          <Link to="/reset">비밀번호 초기화</Link>
        </div>
      </form>
    </SignupStyle>
    </>
  );
}

export default Login;