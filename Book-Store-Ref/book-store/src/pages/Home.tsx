import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";

function Home() {
  return (
   <>
    <Title size="large">제목테스트</Title>
    <Button size="large" scheme="normal" disabled={false} isLoading={false}>버튼 테스트</Button>
    <InputText placeholder="여기에 입력하세요" />
    <div>home body</div>
  </>
  );
}

export default Home;