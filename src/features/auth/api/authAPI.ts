import { instance } from "common/api"
import { BaseResponse } from "common/types/apiTypes"

export const authAPI = {
  login(data: LoginParams) {
    return instance.post<BaseResponse<{ userId: string }>>("auth/login", data);
  },
  logout() {
    return instance.delete<BaseResponse>("auth/login");
  },
  me() {
    return instance.get<BaseResponse<{ id: number; email: string; login: string }>>("auth/me");
  },
  captcha() {
    return instance.get<BaseResponse<{url: string}>>('security/get-captcha-url')
  }
}

export type LoginParams = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
}