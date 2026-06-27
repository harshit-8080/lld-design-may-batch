import { Message } from "../messages/message";
import { User } from "../users/users";
import { generateUUID } from "../util";

export abstract class Chat {
  private chatID: string;
  private members: User[] = [];
  private messages: Message[] = [];

  constructor() {
    this.chatID = generateUUID();
  }

  getId(): string {
    return this.chatID;
  }

  addMessage(newMessage: Message) {
    this.messages.push(newMessage);
  }

  getAllMessages(): Message[] {
    // harshit need to add the code..............
    return this.messages;
  }

  getMembers(): User[] {
    return this.members;
  }

  protected addMembers(newMembers: User) {
    this.members.push(newMembers);
  }

  abstract getChatName(currentUser: User): string;
}

export class OneToOneChat extends Chat {
  constructor(users1: User, user2: User) {
    super();
    this.addMembers(users1);
    this.addMembers(user2);
  }

  getChatName(currentUser: User): string {
    const memeber = this.getMembers();

    const otherUserName = memeber.find((user) => {
      return user.getId() != currentUser.getId();
    });

    return otherUserName.getName();
  }
}

export class GroupChat extends Chat {
  constructor(private groupName: string) {
    super();
  }

  getChatName(currentUser: User): string {
    return this.groupName;
  }

  addGroupMemebers(member: User) {
    this.addMembers(member);
  }
  removeGroupMembers(member: User) {
    ///code to remove this memeber from our member list.
  }
}
