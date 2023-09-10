import { instance } from "common/api"
import { BaseResponse, Dialogs, Message, MessageParams, UtilResponse } from "common/types/apiTypes"

export const dialogsAPI = {
  getAllDialogs() {
    return instance.get<Dialogs[]>(`dialogs`)
  },
  getMessagesWithUser(userId: number) {
    return instance.get<UtilResponse<Message[]>>(`dialogs/${userId}/messages`)
  },
  startChatting(userId: number) {
    return instance.put<BaseResponse>(`dialogs/${userId}`)
  },
  sendMessage(userId: number, body: string) {
    return instance.post<BaseResponse<MessageParams>>(`dialogs/${userId}/messages`, { body })
  },
  isMessageViewed(messageId: string) {
    return instance.get<boolean>(`dialogs/messages/${messageId}/viewed`)
  },
  addMessageToSpam(messageId: string) {
    return instance.post<BaseResponse>(`dialogs/messages/${messageId}/spam`)
  },
  deleteOnlyForMe(messageId: string) {
return instance.delete<BaseResponse>(`dialogs/messages/${messageId}`)
  },
  restoreMessage(messageId: string) {
    return instance.put<BaseResponse>(`dialogs/messages/${messageId}/restore`)
  },
  sortByData(userId: number, date: string) {
    return instance.get<Message[]>(`dialogs/${userId}/messages/new?newerThen=${date}`)
  },
  newMessagesList() {
    return instance.get<Message[]>(`dialogs/messages/new/count`)
  }
}