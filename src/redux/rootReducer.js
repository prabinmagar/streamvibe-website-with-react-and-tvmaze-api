import { combineReducers } from "@reduxjs/toolkit";
import showsReducer from "./slices/showsSlice";
import { persistReducer } from "redux-persist";
import persistConfig from "./persistConfig";

const rootReducer = combineReducers({
  shows: showsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
