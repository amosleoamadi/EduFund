import { configureStore } from "@reduxjs/toolkit";
import { studentAuth } from "../utils/stundentauth/authapi";
import { donorAuth } from "../utils/donorauth/donorauth";
import donorAuthReducer from "../config/donorslices/donorslice";
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
  whitelist: ["student", "donor"],
};

const persistedReducer = persistReducer(
  persistConfig,
  (state = {}, action) => ({
    [studentAuth.reducerPath]: studentAuth.reducer(
      state[studentAuth.reducerPath],
      action
    ),
    student: studentauthReducer(state.student, action),
    [donorAuth.reducerPath]: donorAuth.reducer(
      state[donorAuth.reducerPath],
      action
    ),
    donor: donorAuthReducer(state.donor, action),
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(studentAuth.middleware, donorAuth.middleware),
});

export const persistor = persistStore(store);
