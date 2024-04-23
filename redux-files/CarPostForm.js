import { createSlice } from "@reduxjs/toolkit";

const CarPostForm=createSlice({
    name:"NewPost",
    initialState:{
        index:null,
        make:"Marka secin",
        model:"Model secin",
        banType:"Ban novu"
    },
    reducers:{
selectOption:(state,action)=>{
    state.index=action.payload.index
    state[action.payload.field]=action.payload.option
    console.log(state.index)
}
    },
})
export const {selectOption} =CarPostForm.actions
export default CarPostForm.reducer
