export type AttachmentType = {
  type: string,
  url: string,
  subtitlesUrl?: string,
};

export type AttachmentsType = AttachmentType[];

export type PostType = {
  author: string,
  content: string,
  channel: string,
  id: string,
  date: string,
  attachments: AttachmentsType,
  senderNumber: string,
  region: string,
  isNew: boolean,
  isFavorite: boolean,
  additional_id: string,
};

export type PostStateType = {
  posts: PostType[],
  error: null | string,
  isLoading: boolean,
  isOrderNewMessageFromDown: boolean,
};

export interface PostProps {
  post: PostType;
}

export interface ButtonProps {
  buttons: {
    buttonNames: string[];
  };
}

export interface AttachmentProps {
  attachment: AttachmentType,
}
