import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../redux/slices/userSlice";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});
