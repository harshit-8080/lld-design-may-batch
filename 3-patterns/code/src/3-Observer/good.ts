interface Observer {
  notify(message: string): void;
}

export class EmailService implements Observer {
  notify(message: string): void {
    console.log(`Email notification: ${message}`);
  }
}

export class SMSService implements Observer {
  notify(message: string): void {
    console.log(`SMS notification: ${message}`);
  }
}

export class SlackService implements Observer {
  notify(message: string): void {
    console.log(`Slack notification: ${message}`);
  }
}

export class EventManager {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    console.log(this.observers);
    this.observers = this.observers.filter((obs) => obs != observer);
    console.log(this.observers);
  }

  notifyObservers(message: string): void {
    for (const observer of this.observers) {
      observer.notify(message);
    }
  }
}

export class BankAccount {
  constructor(
    private holderName: string,
    private balance: number,
    private eventManager: EventManager,
  ) {}

  deposit(amount: number): void {
    this.balance += amount;
    console.log(
      `${this.holderName} deposited $${amount}. New balance: $${this.balance}`,
    );

    this.notifyAccountHolder(amount, "debit");
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log(
        `${this.holderName} attempted to withdraw $${amount}, but insufficient funds.`,
      );
      return;
    }
    this.balance -= amount;
    console.log(
      `${this.holderName} withdrew $${amount}. New balance: $${this.balance}`,
    );

    this.notifyAccountHolder(amount, "withdrawal");
  }

  getBalance(): number {
    this.notifyAccountHolder(this.balance, "balance check");
    return this.balance;
  }

  notifyAccountHolder(amount: number, action: string): void {
    this.eventManager.notifyObservers(
      `${action} of $${amount} made to ${this.holderName}'s account. Current balance: $${this.balance}`,
    );
  }
}

const harshit_event_manager = new EventManager();
const emailService = new EmailService();
const smsService = new SMSService();
const slackService = new SlackService();

harshit_event_manager.attach(emailService);
harshit_event_manager.attach(smsService);
harshit_event_manager.attach(slackService);

const harshit_bank = new BankAccount("Harshit", 1000, harshit_event_manager);
harshit_bank.deposit(500);

harshit_event_manager.detach(smsService);
harshit_bank.withdraw(200);
harshit_bank.getBalance();
