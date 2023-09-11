import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "features/auth/model/authSlice"
import { usersSlice } from "features/users/model/usersSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice
  },

})

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store