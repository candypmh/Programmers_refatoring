import styled from "styled-components";
import Footer from "../common/Footer";
import Header from "../common/Header";

interface LayoutProps{
  children: React.ReactNode; //코파일럿이 자동지정
}


function Layout({children}: LayoutProps) {
  return(
    <LayoutStyle>
      <Header/>
       <main>{children}</main>
      <Footer />
    </LayoutStyle>
  );
}

const LayoutStyle= styled.main`
  //가운데 정렬 필요
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  padding: 20px 0;
`;

export default Layout;