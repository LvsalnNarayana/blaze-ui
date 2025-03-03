import { configureStore } from "@reduxjs/toolkit";
import customMiddleware from "./middleware";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./api/auth.api";
import { mt5AccountApi } from "./api/mt5Account.api";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [mt5AccountApi.reducerPath]: mt5AccountApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(customMiddleware),
});
// setupListeners(store.dispatch);
