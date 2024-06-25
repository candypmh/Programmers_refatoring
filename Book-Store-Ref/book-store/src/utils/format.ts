export const formatNumber = (number: number) :string => {
  //number받으면 3자리마다 콤마 넣어주는거 할거임
  //toLocaleString: 천 단위로 콤마(,) 찍기
  return number.toLocaleString();
};

