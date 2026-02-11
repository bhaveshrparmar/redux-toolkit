import { configureStore } from "@reduxjs/toolkit";
import FoodReducer from './FoodSlice'

export const store = configureStore({
    reducer:  {
        FoodList : FoodReducer,
    },
})

