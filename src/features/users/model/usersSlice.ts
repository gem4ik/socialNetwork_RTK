import { createSlice } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk"
import { Params, usersAPI } from "features/users/api/userAPI"
import { User, UtilResponse } from "common/types/apiTypes"

const getUsers = createAppAsyncThunk<UtilResponse<User[]>, Params>("users/getUsers", async (arg, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  const res = await usersAPI.users(arg)
  return res.data
})

const slice = createSlice({
  name: "users",
  initialState: {
    users: [] as User[],
    pageSize: 10,
    currentPage: 1,
    totalUsersCount: 0,
    followed: false,
    isLoading: false
  },
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(getUsers.fulfilled, (state, action)=>{
           state.users = action.payload.items
        })
  }
})

export const usersSlice = slice.reducer
export const usersThunk = { getUsers }