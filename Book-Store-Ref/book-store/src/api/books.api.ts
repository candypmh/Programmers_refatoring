import { Book } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface fetchBooksParams {
  category_id? : number; //쿼리스트링 제공하는거랑 같음
  news?: boolean;
  currentPage?: number;
  limit: number; 
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async(params: fetchBooksParams)=>{

  try {
    //성공시
    const response = await httpClient.get<FetchBooksResponse>("/books", {
      params: params,
    });
    return response.data;

  } catch (error) {
    return {
      books: [],
      pagination: {
        currentPage: 1,
        totalCount: 0,
      }
    };
  }
};