//useSelector

import { AppDispatch, RootState } from "../store";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const useTypedSelector : TypedUseSelectorHook<RootState>= useSelector
export const useTypedDispatch = ()=> useDispatch<AppDispatch>()






interface Obj<T>{
  name:T
}

interface State {
  state: {
    data:string;
    loading:boolean
  }
}

export const obj :Obj<State>= {
  name:{
    state:{
      data:'abcd',
      loading:true
    }
  }
}