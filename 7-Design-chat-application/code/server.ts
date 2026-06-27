import { ChatService } from "./src/chatService/chatService";
import { ReactionDecoator } from "./src/messages/message";

const chatService = ChatService.getInstance();

const harshit = chatService.createUser("Harshit", "9977");
const rahul = chatService.createUser("Rahul", "6677");
const aditya = chatService.createUser("Aditya", "5566");

const harshit_rahul_chat = chatService.createOneOneChat(harshit, rahul);
chatService.createOneOneChat(harshit, aditya);

const college_group = chatService.createGroupChat("college-2016-2020");
college_group.addGroupMemebers(harshit);
college_group.addGroupMemebers(rahul);
college_group.addGroupMemebers(aditya);

// example = harshit send a message to rahul = "HI GM"

// harshit - sender
// message = "HI GM"
// which chat - harshit_rahul_chat

// chatService.sendMessage(harshit.getId(), harshit_rahul_chat.getId(), "HI GM");

// setTimeout(() => {
//   chatService.sendMessage(
//     rahul.getId(),
//     harshit_rahul_chat.getId(),
//     "hey hi bro",
//   );
// }, 2000);

const message = chatService.sendMessage(
  harshit.getId(),
  college_group.getId(),
  "welcome to the group",
);

const reaction = new ReactionDecoator(message);
reaction.addReaction("❤️", harshit.getId());
reaction.addReaction("👍", rahul.getId());
reaction.addReaction("❤️", rahul.getId());
reaction.addReaction("👍", harshit.getId());

console.log(reaction.getContent()); // "welcome to the group" ❤️:2, 👍:4, 👌:1

console.log(message.getContent()); // "welcome to the group",
