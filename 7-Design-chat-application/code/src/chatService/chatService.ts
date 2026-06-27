import { Chat, GroupChat, OneToOneChat } from "../chat/chat";
import { Message } from "../messages/message";
import { User } from "../users/users";
import { generateUUID } from "../util";

export class ChatService {
  private users: Map<string, User> = new Map();
  private chats: Map<string, Chat> = new Map();

  static instance: ChatService = null;
  private constructor() {}

  static getInstance(): ChatService {
    if (this.instance == null) {
      this.instance = new ChatService();
    }
    return this.instance;
  }

  createUser(userName: string, contact: string) {
    const newUser = new User(generateUUID(), userName, contact);
    this.users.set(newUser.getId(), newUser);

    return newUser;
  }

  createOneOneChat(user1: User, user2: User) {
    const newChat = new OneToOneChat(user1, user2);
    this.chats.set(newChat.getId(), newChat);

    return newChat;
  }

  createGroupChat(groupName: string) {
    const newGroup = new GroupChat(groupName);
    this.chats.set(newGroup.getId(), newGroup);

    return newGroup;
  }

  sendMessage(senderId: string, chatId: string, content: string) {
    const sender = this.users.get(senderId);
    const chat = this.chats.get(chatId);

    const message = new Message(generateUUID(), sender, content, chat);
    chat.addMessage(message);

    const members = chat.getMembers();
    for (let user of members) {
      if (user.getId() != sender.getId()) {
        user.getMessage(message);
      }
    }

    return message;
  }

  getHistory(chatId: string) {
    const chat = this.chats.get(chatId);

    const messageHistory = chat.getAllMessages();
    console.log(messageHistory);
  }
}
