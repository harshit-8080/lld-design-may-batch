import { Chat } from "../chat/chat";
import { User } from "../users/users";

// decorator interfacce
interface IDecorator {
  getContent(): string;
}

// concreate class
export class Message implements IDecorator {
  constructor(
    private id: string,
    private sender: User,
    private content: string,
    private chat: Chat,
    private timeStamp: Date = new Date(),
    private seenList: Map<string, boolean> = new Map(),
  ) {}

  getId(): string {
    return this.id;
  }

  getSender(): string {
    return this.sender.getName();
  }

  getContent(): string {
    return this.content;
  }

  getChat(): Chat {
    return this.chat;
  }

  getSeenList() {
    return this.seenList;
  }
}

// base decorator is abstraction of decoration
abstract class BaseDecorator implements IDecorator {
  constructor(protected message: IDecorator) {}

  // getContent(): string {
  //   return this.baseObject.getContent() + "❤️ ✌️";
  // }

  abstract getContent(): string;
}

type Reaction = {
  emoji: string;
  userId: string;
};

// this is concreate decotion class....
export class ReactionDecoator extends BaseDecorator {
  private reactionList: Reaction[] = [];

  constructor(message: IDecorator) {
    super(message);
  }

  addReaction(emoji: string, userId: string) {
    const alreadyExits = this.reactionList.some(
      (r) => r.emoji == emoji && r.userId == userId,
    );

    if (!alreadyExits) {
      this.reactionList.push({ emoji, userId });
    }
  }

  // "HI GM" ❤️:2, 👍:4, 👌:1
  getReaction(): string {
    let summary: Record<string, string[]> = {};

    for (let r of this.reactionList) {
      if (!summary[r.emoji]) {
        summary[r.emoji] = [];
      }
      summary[r.emoji].push(r.userId);
    }

    const emojiKey = Object.keys(summary);
    let content = "";
    emojiKey.map((emoji) => {
      content += emoji + " " + summary[emoji].length + ",";
    });

    return content;
  }

  getContent(): string {
    // "HI GM" ❤️:2, 👍:4, 👌:1
    return this.message.getContent() + " " + this.getReaction();
  }
}
