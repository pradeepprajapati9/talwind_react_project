import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducer";

export const store = configureStore({
    reducer: { data: rootReducer }
})