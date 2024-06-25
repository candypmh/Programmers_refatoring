import { useRouteError } from "react-router-dom";

//원래 에러는 리액트 라우트 돔에서 준비한 에러엘리먼트를 받게 되어있음
interface RouterError {
  statusText?: string;
  message?: string;
}

function Error(){
  const error = useRouteError() as RouterError; //라우트 에러타입 사용하기
  return(
    <div>
      <h1>오류가 발생했습니다.</h1>
      <p>다음과 같은 오류가 발생했습니다.</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

export default Error;
