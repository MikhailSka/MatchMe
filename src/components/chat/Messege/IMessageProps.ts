export interface IMessage {
    text: string;
    datetime: string;
    isCurrentUser: boolean;
  }

export interface IMessageProps {
    message: IMessage;
  }