/** @format */

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer/productReducer";

export const store = configureStore({
  reducer: {
    productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
