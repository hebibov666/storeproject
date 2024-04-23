import { configureStore } from "@reduxjs/toolkit";
import CarPostForm from "./CarPostForm";
const store=configureStore({
    reducer: {
        counter: CarPostForm,
      },
})

export default store