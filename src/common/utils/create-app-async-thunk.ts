import { AppDispatch, AppRootState } from "app/store"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { BaseResponse } from "common/types/apiTypes"

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppRootState
  dispatch: AppDispatch
  rejectValue: RejectValue
}>()

export type RejectValue = {
  data: BaseResponse
  showGlobalError?: boolean
}