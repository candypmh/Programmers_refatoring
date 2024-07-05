import { styled } from "styled-components";
import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { resetPassword, resetRequest, signup } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";
import { SignupStyle } from "./Signup";

export interface SignupProps {
  email: string;
  password: string;
}

function ResetPassword() {
  const navigate = useNavigate();
  const showAlert = useAlert();
  const [resetRequested, setResetRequested] = useState(false); //요청했느냐로 구분가능하니 boolean

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = (data: SignupProps) => {
    if(resetRequested){
      //requested된 이후
      //초기화
      resetPassword(data).then(()=>{
        //최종 초기화 완료
        showAlert("비밀번호가 초기화되었습니다.");
        navigate("/login");
      });
    }else{
      //요청
      resetRequest(data).then(() => {
        setResetRequested(true);
      });
    }
  };

  return (
    <>
      {/* //공통 컴포넌트 불러오기 */}
      <Title size="large">비밀번호 초기화</Title>
      <SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText
              placeholder="이메일" inputType="email" 
              {...register("email", { required: true })} />{" "} {/*e는 event*/}
            {errors.email && (
              <p className="error-text">이메일을 입력해주세요.</p>
            )}
          </fieldset>

          {resetRequested && (
            <fieldset>
              <InputText placeholder="비밀번호" inputType="password"
                {...register("password", { required: true })} />
              {errors.password && (
                <p className="error-text">비밀번호를 입력해주세요.</p>
              )}
            </fieldset>
          )}

          <fieldset>
            <Button type="submit" size="medium" scheme="primary"
              disabled={false} isLoading={false}>{resetRequested? "비밀번호 초기화" : "초기화 요청" } </Button>
          </fieldset>
          <div className="info">
            <Link to="/reset">비밀번호 초기화</Link>
          </div>
        </form>
      </SignupStyle>
    </>
  );
}

//스타일 중복은 불필요하니 signup style가져오면 됨

export default ResetPassword;
