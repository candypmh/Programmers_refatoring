//리액트를 위한 테스팅 라이브러리
import {render, screen} from '@testing-library/react';
import InputText from "./InputText";
import { BookStoreThemeProvider } from '../../context/themeContext';
import React from 'react';

describe('InputText 컴포넌트 테스트', () => { 
  it('렌더를 확인',() => {
    render(<BookStoreThemeProvider>
      <InputText placeholder="여기에 입력"/>
    </BookStoreThemeProvider>);

    expect(screen.getByPlaceholderText("여기에 입력")).toBeInTheDocument(); 
  });

  it('forwardRef 테스트', () =>{
    const ref = React.createRef<HTMLInputElement>();

    const {container} = render(
      <BookStoreThemeProvider>
        <InputText placeholder="여기에 입력" ref={ref} />
      </BookStoreThemeProvider>
    );

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

 });