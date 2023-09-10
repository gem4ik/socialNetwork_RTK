import { instance } from "common/api"
import { BaseResponse } from "common/types/apiTypes"

export const followAPI = {
  isFollow(userId: number) {
    return instance.get<boolean>(`follow/${userId}`)
  },
  follow(userId: number) {
    return instance.post<BaseResponse>(`follow/${userId}`)
  },
  unFollow(userId: number) {
    return instance.delete<BaseResponse>(`follow/${userId}`)
  }
}