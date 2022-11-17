import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './slices/themeSlice'
import accountsSLice from './slices/accountsSlice'

export const store = configureStore({
  reducer: {
    themeSlice,
    accountsSLice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch