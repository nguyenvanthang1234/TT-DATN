import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../redux/slides/userSlide";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
