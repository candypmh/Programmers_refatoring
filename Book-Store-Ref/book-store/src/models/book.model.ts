export interface Book{
  id: number;
  title: string;
  img: number; //픽썸 외부사이트 사용할것임
  category_id: number;
  form: string;
  isbn: string;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  likes: number;
  pubDate: string;
}

export interface BookDetail extends Book{
  category_name: string;
  liked: boolean;
}