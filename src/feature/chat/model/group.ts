import { Message } from "./message";

export type Group = {
  id: string;
  title: string;
  description: string;
  messages: Message[];
};
