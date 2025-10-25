import { configureStore } from "@reduxjs/toolkit";
import { studentAuth } from "../utils/stundentauth/authapi";
import studentauthReducer from "../config/studentslices/studentauthslice";

export const store = configureStore({
  reducer: {
    [studentAuth.reducerPath]: studentAuth.reducer,
    student: studentauthReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentAuth.middleware),
});
