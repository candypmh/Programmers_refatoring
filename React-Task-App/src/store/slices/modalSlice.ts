import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../types";

//3번
//타입은 T 인터페이스는 I 붙여주기
type TModalState = {
  boardId: string;
  listId: string;
  task: ITask;//객체라서 types- tndex.ts에서 만들어주기
}

//2번
const initialState: TModalState = {
  boardId: "board-0",
  listId: "list-0",
  task:{
    taskId:"task-0",
    taskName: "task 0",
    taskDescription: "task description",
    taskOwner: "Mine"
  }
}

//1번
const modalSlice = createSlice({
  name: 'modal',
  initialState, //초기 state필요
  reducers: {

  }
})


//4번
export const modalReducer = modalSlice.reducer; //내보내기
//내보내고 뭉쳐서 store로 만들 수 있음