// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    category:[
        {
            title:"Discounted Products"
          },
          {
            title:"For men"
          },
          {
            title:"For women"
          },
          {
            title:"Electronics"
          },
    ]
  },
  reducers: {
   
  },
});

export const { increment, decrement } = categorySlice.actions;
export default categorySlice.reducer;
