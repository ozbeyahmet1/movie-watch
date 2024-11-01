import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices/exampleSlice";
export const store = configureStore({
  reducer: {
    exampleReducer: exampleReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const example = (state: RootState) => state.exampleReducer.value;
