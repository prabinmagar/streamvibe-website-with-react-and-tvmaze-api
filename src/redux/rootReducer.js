import { combineReducers } from "@reduxjs/toolkit";
import showsReducer from "./slices/showsSlice";
import sidebarReducer from "./slices/sidebarSlice";
import { persistReducer } from "redux-persist";
import persistConfig from "./persistConfig";

const rootReducer = combineReducers({
  shows: showsReducer,
  sidebar: sidebarReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
