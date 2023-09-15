type FieldError = {
  error: string;
  field: string;
};

export type BaseResponse<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  data: D;
  fieldsErrors: FieldError[];
}

export type Photos = {
  "small": null | string,
  "large": null | string
}

export type User = {
  "followed": boolean
  "id": number
  "name": string
  "photos": Photos
  "status": null | any,
  "uniqueUrlName": null | any
};

type Contacts = {
  "facebook": null | string
  "website": null | string
  "vk": null | string
  "twitter": null | string
  "instagram": null | string
  "youtube": null | string
  "github": null | string
  "mainLink": null | string
}

export type UserProfile = {
  "aboutMe": string
  "contacts": Contacts
  "lookingForAJob": boolean
  "lookingForAJobDescription": string
  "fullName": string
  "userId": number
  "photos": Photos
}

export type Message = {
  "id": string
  "body": string
  "translatedBody": null,
  "addedAt": string
  "senderId": number
  "senderName": string
  "recipientId": number
  "viewed": boolean
}
export type MessageParams = {
  "id": string
  "body": string
  "translatedBody": null,
  "addedAt": string
  "senderId": number
  "senderName": string
  "recipientId": number
  "recipientName": string
  "viewed": boolean
  "deletedBySender": boolean
  "deletedByRecipient": boolean
  "isSpam": boolean
  "distributionId": null
}

export type UtilResponse<D = {}> = {
  items: D,
  totalCount: number
  error: null | string
}

export type Dialogs = {
  "id": number
  "userName": string
  "hasNewMessages": boolean
  "lastDialogActivityDate": string
  "lastUserActivityDate": string
  "newMessagesCount": number
  "photos": Photos
}

