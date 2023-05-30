import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";

const reducer = combineReducers({
  data: dataReducer,
});

export const store = configureStore({
  reducer,
});
