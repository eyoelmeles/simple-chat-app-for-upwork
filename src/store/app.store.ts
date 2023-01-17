import { configureStore } from "@reduxjs/toolkit";
// import { authReducer } from "../libs/auth/index";
import { chatReducer } from "../feature/chat/store/chat.store";
import { appApi } from "./app.api";

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    chat: chatReducer,
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      appApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
