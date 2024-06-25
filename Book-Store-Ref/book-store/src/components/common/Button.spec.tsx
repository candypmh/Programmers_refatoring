//리액트를 위한 테스팅 라이브러리
import {render, screen} from '@testing-library/react';
import Button from "./Button";
import { BookStoreThemeProvider } from '../../context/themeContext';

describe('Button 컴포넌트 테스트', () => { 
  it('렌더를 확인',() => {
    //1.렌더
    render(<BookStoreThemeProvider>
      <Button size="large" scheme="primary" disabled={false} isLoading={false}>버튼</Button>
    </BookStoreThemeProvider>);

    //2.expect로 확인
    expect(screen.getByText('버튼')).toBeInTheDocument(); //화면상 문서에 있나 확인
  });

  it('size props 적용', () =>{
    const {container} = render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary" disabled={false} isLoading={false}>버튼</Button>
      </BookStoreThemeProvider>
    );

    expect(screen.getByRole("button")).toHaveStyle({fontSize: "1.5rem"});
  });

  // it('color props 적용', () =>{
  //   const {container} = render(
  //     <BookStoreThemeProvider>
  //     <Button size="large" scheme="primary" disabled={false} isLoading={false}>버튼</Button>
  //     </BookStoreThemeProvider>
  //   );

  //   expect(screen.getByRole("button")).toHaveStyle({color: "normal"});
  // });
 });