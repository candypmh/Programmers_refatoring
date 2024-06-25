import 'sanitize.css';
import { createGlobalStyle } from 'styled-components';
import { ThemeName } from './theme';

interface Props {
  themeName: ThemeName;
}

// generic으로 테마넣어주기 가능
export const GlobalStyle = createGlobalStyle<Props>` 
  body {
    padding: 0; 
    margin: 0; 
    background-color : ${(props) => props.themeName === 'light' ? "white" : "black"}
    }
    
    h1{
      margin: 0; 
    }

    *{
    color: ${(props) => props.themeName === 'light' ? "black" : "white"};
     }
`;