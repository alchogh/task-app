import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBoardProps } from "../../types";

type TBoardsState = {
  modalActive: boolean;
  boardArray : IBoardProps[]
}

type TAddBoardAction = {
  board:IBoardProps
}

const initialState :TBoardsState = {
  modalActive : false,
  boardArray:[
    {
      boardId:'board-0',
      boardName:'첫번째 게시물',
      lists :[
        {listId:'list-0',
          listName:'list 0',
          tasks:[
            {
              taskId:'task-0',
              taskName:'task 0',
              taskDescription:'description',
              taskOwner:'0'
            },
            {
              taskId:'task-1',
              taskName:'task 1',
              taskDescription:'description1',
              taskOwner:'1'
            }
          ]
        },
        {listId:'list-1',
          listName:'list 1',
          tasks:[
            {
              taskId:'task-3',
              taskName:'task 3',
              taskDescription:'description',
              taskOwner:'3'
            },
            {
              taskId:'task-4',
              taskName:'task 5',
              taskDescription:'description5',
              taskOwner:'5'
            }
          ]
        }
      ]
    }
  ]
}


const boardsSlice =  createSlice({
  name:'boards',
  initialState,
  reducers : {
    addBoard: (state, {payload}:PayloadAction<TAddBoardAction>)=>{
      state.boardArray.push(payload.board)
    }
  }
})

export const {addBoard} = boardsSlice.actions
export const boardsReducer = boardsSlice.reducer