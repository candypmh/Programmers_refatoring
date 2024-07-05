import { styled } from 'styled-components';
import { useCategory } from '../../hooks/useCategory';
import Button from '../common/Button';
import { useSearchParams } from 'react-router-dom';
import { QUERYSTRING } from '../../constants/querystring';

function BooksFilter() {
  //상태
  // 1. 카테고리
  // 2. 신간 여부 true, false

  const { category } = useCategory();
  const [searchParams, setSearchParams] = useSearchParams();

  //카테고리 핸들링
  const handleCategory = (category_id: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (category_id === null) {
      //전체 클릭시 모든 쿼리스트링 제거해야 함
      newSearchParams.delete(QUERYSTRING.CATEGORY_ID);
    } else {
      //id가 number면
      newSearchParams.set(QUERYSTRING.CATEGORY_ID, category_id.toString());
    }
    setSearchParams(newSearchParams);
  };
  
  const currentCategory = searchParams.get(QUERYSTRING.CATEGORY_ID);
  console.log(currentCategory);

  //신간
  const handleNews = () => {
    const newSearchParams = new URLSearchParams(searchParams);

    if(newSearchParams.get(QUERYSTRING.NEWS)){
      newSearchParams.delete(QUERYSTRING.NEWS);
    } else{
      newSearchParams.set(QUERYSTRING.NEWS, "true");
    }
    setSearchParams(newSearchParams);
  };


  return (
    <BooksFilterStyle>
      <div className="category">
        {category.map((item) => (
          <Button size="medium" 
            // scheme={item.isActive? "primary": "normal"}
            scheme={currentCategory === item.category_id?.toString()? "primary": "normal"}
            key={item.category_id}
            onClick={()=> handleCategory(item.category_id)}>
            {item.category_name}
          </Button>
        ))}
      </div>
      <div className="new">
        <Button size="medium" scheme={searchParams.get("news") ? "primary" : "normal"}
          onClick={() => handleNews()}>
          신간
        </Button>
      </div>
    </BooksFilterStyle>
  );
}

const BooksFilterStyle = styled.div`
  display: flex;
  gap: 24px;

  .category {
    display: flex;
    gap: 8px;
  }
`;

export default BooksFilter;
