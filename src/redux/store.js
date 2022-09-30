import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import booksReducer from "./booksSlice";
import userReducer from "./userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { bakersApi } from "../services/api";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: booksReducer,
    user: userReducer,
    [bakersApi.reducerPath]: bakersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bakersApi.middleware),
});

setupListeners(store.dispatch);
