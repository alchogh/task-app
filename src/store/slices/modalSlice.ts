import { createSlice } from "@reduxjs/toolkit";
import { ITaskProps } from "../../types";
type TModalStateProps ={
  boardId:string;
  listId:string;
  task :ITaskProps;
}


const initialState:TModalStateProps = {
  boardId:'board-0',
  listId : 'list-0',
  task:{
    taskId:'task-0',
    taskName:'task 0',
    taskDescription :"task description",
    taskOwner:'geonooo'
  }
}

const modalSlice =  createSlice({
    name:'modal',
    initialState,
    reducers:{

    }
})

export const modalReducer = modalSlice.reducer