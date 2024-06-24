import { createSlice } from "@reduxjs/toolkit";
import { ILogItemProps } from "../../types";

type TloggerStateProps ={
  logArray:ILogItemProps[]
}

const initialState:TloggerStateProps = {
  logArray:[]
}

const loggerSlice = createSlice({
  name:'logger',
  initialState,
  reducers:{

  }
})

export const loggerReducer = loggerSlice.reducer