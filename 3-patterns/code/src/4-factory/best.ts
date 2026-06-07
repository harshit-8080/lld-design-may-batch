interface INotification {
  send(message: string): void;
}

class EmailNotification implements INotification {
  send(message: string): void {
    console.log(`Sending email notification: ${message}`);
  }
}

class SMSNotification implements INotification {
  send(message: string): void {
    console.log(`Sending SMS notification: ${message}`);
  }
}

class SlackNotification implements INotification {
  send(message: string): void {
    console.log(`Sending Slack notification: ${message}`);
  }
}

class DiscordNotification implements INotification {
  send(message: string): void {}
}

class MicrosoftTeamsNotification implements INotification {
  send(message: string): void {
    console.log(`Sending Microsoft Teams notification: ${message}`);
  }
}

class Abc implements INotification {
  send(message: string): void {
    console.log("hlh");
  }
}

class NotificationFactory {
  static notiificationMap: Map<string, new () => INotification> = new Map();

  static registerNotificationType(
    type: string,
    notification: new () => INotification,
  ): void {
    this.notiificationMap.set(type, notification);
  }

  static createNotification(type: string): INotification {
    const notificationType = NotificationFactory.notiificationMap.get(type);
    return new notificationType();
  }
}

NotificationFactory.registerNotificationType("email", EmailNotification);
NotificationFactory.registerNotificationType("sms", SMSNotification);
NotificationFactory.registerNotificationType("slack", SlackNotification);
NotificationFactory.registerNotificationType(
  "teams",
  MicrosoftTeamsNotification,
);

const saloni_email = NotificationFactory.createNotification("email");
saloni_email.send("any message");

const harshit_slack = NotificationFactory.createNotification("slack");
harshit_slack.send("hello");

const result = NotificationFactory.createNotification("abc");
