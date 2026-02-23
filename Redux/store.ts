import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/modalSlice'
import { booksApi } from "./features/apiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
        modal: modalReducer,
        [booksApi.reducerPath]: booksApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(booksApi.middleware)
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
