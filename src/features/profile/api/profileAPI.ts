import { instance } from "common/api"
import { BaseResponse, UserProfile } from "common/types/apiTypes"

export const profileAPI = {
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`)
  },
  changeStatus(status: string) {
    return instance.put<BaseResponse>("profile/status", status)
  },
  getProfile(userId: number) {
    return instance.get<UserProfile>(`profile/${userId}`)
  },
  updateProfile(model: UserProfile) {
    return instance.put<BaseResponse>('profile', model)
  },
  updateProfilePhoto(photo: string) {
    return instance.put<BaseResponse>('profile/photo', photo)
  }
}


//https://social-network.samuraijs.com/api/1.0/profile/status/29800