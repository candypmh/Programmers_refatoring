//리액트를 위한 테스팅 라이브러리
import {render, screen} from '@testing-library/react';
import InputText from "./InputText";
import { BookStoreThemeProvider } from '../../context/themeContext';
import React from 'react';

describe('InputText 컴포넌트 테스트', () => { 
  it('렌더를 확인',() => {
    //1.렌더
    render(<BookStoreThemeProvider>
      <InputText placeholder="여기에 입력"/>
    </BookStoreThemeProvider>);

    //2.expect로 확인
    expect(screen.getByPlaceholderText("여기에 입력")).toBeInTheDocument(); //화면상 문서에 있나 확인
  });

  it('forwardRef 테스트', () =>{

    //이 ref를 렌더할때 전달해줌으로써 제대로 Ref되나 확인
    const ref = React.createRef<HTMLInputElement>();

    const {container} = render(
      <BookStoreThemeProvider>
        <InputText placeholder="여기에 입력" ref={ref} />
      </BookStoreThemeProvider>
    );

    //ref는 항상 current를 통해 access됨
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

 });