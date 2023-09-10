import { instance } from "common/api"
import { BaseResponse, User, UtilResponse } from "common/types/apiTypes"

type Params = {
  count? : number
  page?: number
  term?: string
}

export const usersAPI = {
  users(params: Params) {
    return instance.get<BaseResponse<UtilResponse<User[]>>>(`users`, {params})
  }
}