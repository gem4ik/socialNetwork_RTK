import { createSlice } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk"
import { authAPI, LoginParams } from "features/auth/api/authAPI"
import { ResultCode } from "common/enums/enums"

const login = createAppAsyncThunk<{ isLoggedIn: boolean }, LoginParams>("auth/login", async (arg, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI
  const res = await authAPI.login(arg)
  if (res.data.resultCode === ResultCode.Success) {
    return { isLoggedIn: true }
  } else if (res.data.resultCode === ResultCode.Captcha) {
    dispatch(authThunks.captcha())
    return { isLoggedIn: false }
  } else {
    return rejectWithValue({ data: res.data })
  }
})

const logout = createAppAsyncThunk<{ isLoggedIn: boolean }, undefined>("auth/logout", async (arg, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  const res = await authAPI.logout()
  if (res.data.resultCode === ResultCode.Success) {
    return { isLoggedIn: false }
  } else {
    return rejectWithValue({ data: res.data })
  }
})

const captcha = createAppAsyncThunk<{ captcha: string }, undefined>("auth/captcha", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  const res = await authAPI.captcha()
  return { captcha: res.data.url }
})

const slice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    captcha: null as null | string
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn
      })
      .addCase(captcha.fulfilled, (state, action) => {
        state.captcha = action.payload.captcha
      })
  }
})

export const authSlice = slice.reducer
export const authThunks = { login, captcha, logout }