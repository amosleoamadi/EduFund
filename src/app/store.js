import { configureStore } from "@reduxjs/toolkit";
import { studentAuth } from "../utils/stundentauth/authapi";
import studentauthReducer from "../config/studentslices/studentauthslice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["student"],
};

const persistedReducer = persistReducer(
  persistConfig,
  (state = {}, action) => ({
    [studentAuth.reducerPath]: studentAuth.reducer(
      state[studentAuth.reducerPath],
      action
    ),
    student: studentauthReducer(state.student, action),
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(studentAuth.middleware),
});

export const persistor = persistStore(store);
