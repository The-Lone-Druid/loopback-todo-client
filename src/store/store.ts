import { configureStore } from "@reduxjs/toolkit";
import { pingApi } from "../services/pingApi";

export const store = configureStore({
  reducer: {
    [pingApi.reducerPath]: pingApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pingApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
