import { Book } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface fetchBooksParams {
  category_id? : number; 
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