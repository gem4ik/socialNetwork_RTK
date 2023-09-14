import { createSlice } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk"
import { Params, usersAPI } from "features/users/api/userAPI"
import { User, UtilResponse } from "common/types/apiTypes"
import { followAPI } from "features/users/api/followAPI"
import { ResultCode } from "common/enums/enums"

const getUsers = createAppAsyncThunk<UtilResponse<User[]>, Params>("users/getUsers", async (arg, thunkAPI) => {
  const res = await usersAPI.users(arg)
  return res.data
})
const followUser = createAppAsyncThunk<{ userId: number }, number>("users/followUser", async (userId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  const res = await followAPI.follow(userId)
  if (res.data.resultCode === ResultCode.Success) {
    return { userId }
  } else {
    return rejectWithValue({ data: res.data })
  }
})
const unfollowUser = createAppAsyncThunk<{ userId: number }, number>("users/unfollowUser", async (userId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  const res = await followAPI.unFollow(userId)
  if (res.data.resultCode === ResultCode.Success) {
    return { userId }
  } else {
    return rejectWithValue({ data: res.data })
  }
})

const slice = createSlice({
  name: "users",
  initialState: {
    users: [] as User[],
    totalUsersCount: 30000,
    isLoading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload.items
        state.totalUsersCount = action.payload.totalCount
      })
      .addCase(followUser.fulfilled, (state, action) => {
        const user = state.users.find((u) => u.id === action.payload.userId)
        if (user) {
          user.followed = true
        }
      })
      .addCase(unfollowUser.fulfilled, (state, action) => {
        const user = state.users.find((u) => u.id === action.payload.userId)
        if (user) {
          user.followed = false
        }
      })
  }
})

export const usersSlice = slice.reducer
export const usersThunk = { getUsers, followUser, unfollowUser }