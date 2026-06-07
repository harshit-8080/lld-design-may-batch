// interface INotification {
//   send(message: string): void;
// }

// class EmailNotification implements INotification {
//   send(message: string): void {
//     console.log(`Sending email notification: ${message}`);
//   }
// }

// class SMSNotification implements INotification {
//   send(message: string): void {
//     console.log(`Sending SMS notification: ${message}`);
//   }
// }

// class SlackNotification implements INotification {
//   send(message: string): void {
//     console.log(`Sending Slack notification: ${message}`);
//   }
// }

// class DiscordNotification implements INotification {
//   send(message: string): void {}
// }

// class MicrosoftTeamsNotification implements INotification {
//   send(message: string): void {
//     console.log(`Sending Microsoft Teams notification: ${message}`);
//   }
// }

// class NotificationFactory {
//   static createNotification(type: string): INotification {
//     switch (type) {
//       case "email":
//         return new EmailNotification();
//       case "sms":
//         return new SMSNotification();
//       case "slack":
//         return new SlackNotification();
//       case "discord":
//         return new DiscordNotification();
//       case "msteams":
//         return new MicrosoftTeamsNotification();
//       default:
//         throw new Error("Invalid notification type");
//     }
//   }
// }

// NotificationFactory.createNotification("email").send("Hello via Email!");
