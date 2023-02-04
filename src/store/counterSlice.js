import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  count:1
}

export const counterSliece = createSlice({
  name:'counter',
  initialState,
  reducers:{
    increment:(state)=>{
      state.count = state.count+1;
    },
    decrement:(state)=>{
      state.count = state.count-1;
    }
  }
})

export const {increment,decrement} = counterSliece.actions;
export default counterSliece.reducer;
