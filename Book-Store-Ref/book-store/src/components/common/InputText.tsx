import React, { ForwardedRef } from 'react';
import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  placeholder?: string;
  inputType?: "text" | "email" | "password" | "number";
}

const InputText = React.forwardRef(({placeholder, inputType, onChange, ...props}: Props, ref: ForwardedRef<HTMLInputElement>)=> {
  return(
    //3. 배치
    <InputTextStyle placeholder={placeholder} ref={ref} type={inputType} onChange={onChange} {...props} />
  );
});

//1) 스타일드 컴포넌트 필요
//input의 type을 지정하는 attribute필요
const InputTextStyle = styled.input`
  padding: 0.25rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({theme})=> theme.borderRadius.default};
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.text};

`;

  //2) 내보내기
  export default InputText;