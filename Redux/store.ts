import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/modalSlice'
import { booksApi } from "./features/apiSlice";
import sidebarReducer from "./features/sidebarSlice";
import audioReducer from "./features/audioSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
        modal: modalReducer,
        sidebar: sidebarReducer,
        [booksApi.reducerPath]: booksApi.reducer,
        audio: audioReducer, 
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(booksApi.middleware)
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
