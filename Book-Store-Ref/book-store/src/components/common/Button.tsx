import { styled } from 'styled-components';
import { ButtonSize, ButtonScheme } from '../../style/theme';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children:React.ReactNode;
  size: ButtonSize;
  scheme: ButtonScheme;
  disabled: boolean; //클릭상태
  isLoading: boolean; 
  //버튼 클릭시 여러번 실행되면 별로 좋지않은 UI로 이야기
  //그래서 클릭되면 더이상 클릭되지않도록 설정
}

function Button({children, size, scheme, disabled, isLoading}:Props) {
  return (
    <ButtonStyle size={size} scheme={scheme} disabled={disabled} isLoading={isLoading}>
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<Omit<Props, "children">>`
  font-size: ${({theme, size})=> theme.button[size].fontSize};
  padding: ${({theme, size})=> theme.button[size].fontSize};
  color:  ${({theme, scheme})=> theme.buttonScheme[scheme].color};
  background-color: ${({theme, scheme})=> theme.buttonScheme[scheme].backgroundColor};
  border: 0;
  border-radius: ${({theme})=> theme.borderRadius.default};
  opacity: ${({disabled})=> (disabled? 0.5 : 1)}; 
  pointer-events: ${({disabled})=> (disabled? "none" : "auto")}; 
  cursor: ${({disabled})=> (disabled? "none" : "pointer")}; 
`;
// opacity: 버튼 비활성화면1, 아니면 0.5
//pointer-events는 opacity에 맞춰줌 => none 화면에 출력은 되지만 클릭은 안됨

export default Button;