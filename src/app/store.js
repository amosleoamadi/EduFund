import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { studentAuth } from "../utils/stundentauth/authapi";
import { donorAuth } from "../utils/donorauth/donorauth";
import { campaignApi } from "../utils/stundentauth/createcampaignapi";
import userReducer from "../config/slices/studentauthslice";
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
import { getalldonorApi } from "../utils/stundentauth/getdonor";
import { walletBalApi } from "../utils/stundentauth/walletbalapi";
import { donorpaymentApi } from "../utils/donorauth/donoropayment";
import { userApi } from "../utils/usersettting";

const rootReducer = combineReducers({
  [studentAuth.reducerPath]: studentAuth.reducer,
  [donorAuth.reducerPath]: donorAuth.reducer,
  [campaignApi.reducerPath]: campaignApi.reducer,
  [getalldonorApi.reducerPath]: getalldonorApi.reducer,
  [walletBalApi.reducerPath]: walletBalApi.reducer,
  [donorpaymentApi.reducerPath]: donorpaymentApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      studentAuth.middleware,
      donorAuth.middleware,
      campaignApi.middleware,
      getalldonorApi.middleware,
      walletBalApi.middleware,
      donorpaymentApi.middleware,
      userApi.middleware
    ),
});

export const persistor = persistStore(store);
