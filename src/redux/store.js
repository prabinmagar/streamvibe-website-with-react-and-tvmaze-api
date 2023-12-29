import { configureStore } from "@reduxjs/toolkit";
import showsReducer from "./slices/showsSlice";

export const store = configureStore({
    reducer: {
        shows: showsReducer
    },
});