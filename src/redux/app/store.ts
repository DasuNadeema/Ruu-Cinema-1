import { configureStore } from "@reduxjs/toolkit";
import allMovies from "../features/allMovies";

export const store = configureStore({
  reducer: {
    allMovies: allMovies,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
