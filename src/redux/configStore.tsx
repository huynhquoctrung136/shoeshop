/** @format */

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer/productReducer";
import userReducer from "./reducers/userReducer/userReducer";

export const store = configureStore({
  reducer: {
    productReducer,
    userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
