// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    user:null
  },
  reducers: {
   setUserData:(state,action)=>{
state.user=action.payload
console.log(action)
   }
  },
});

export const { setUserData } = categorySlice.actions;
export default categorySlice.reducer;
