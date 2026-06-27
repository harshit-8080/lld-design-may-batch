import { Message } from "../messages/message";

export class User {
  constructor(
    private id: string,
    private name: string,
    private contact: string,
    private isOnline: boolean = true,
  ) {}

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getContact(): string {
    return this.contact;
  }

  goOnline() {
    this.isOnline = true;
  }

  goOffline() {
    this.isOnline = false;
  }

  getMessage(message: Message) {
    if (this.isOnline) {
      console.log(
        `Notification for ${this.getName()} From 
        ${message.getSender()} 
        and Message is ${message.getContent()}`,
      );
    } else {
      // we can save this message somewhere and
      // whenever person is online fetch all the message
    }
  }
}
