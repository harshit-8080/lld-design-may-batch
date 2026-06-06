// import {
//   BankAccount,
//   EmailService,
//   EventManager,
//   SlackService,
//   SMSService,
// } from "./src/3-Observer/good";

// const harshit_event_manager = new EventManager();
// const emailService = new EmailService();
// const smsService = new SMSService();
// const slackService = new SlackService();

// harshit_event_manager.attach(emailService);
// harshit_event_manager.attach(smsService);
// harshit_event_manager.attach(slackService);

// const harshit_bank = new BankAccount("Harshit", 1000, harshit_event_manager);
// harshit_bank.deposit(500);

// harshit_event_manager.detach(smsService);
// harshit_bank.withdraw(200);
