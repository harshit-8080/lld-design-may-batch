// class EmailService {
//   notify(message: string): void {
//     console.log(`Email notification: ${message}`);
//   }
// }

// class SMSService {
//   notify(message: string): void {
//     console.log(`SMS notification: ${message}`);
//   }
// }

// class BankAccount {
//   constructor(
//     private holderName: string,
//     private balance: number,
//   ) {}

//   deposit(amount: number): void {
//     this.balance += amount;
//     console.log(
//       `${this.holderName} deposited $${amount}. New balance: $${this.balance}`,
//     );

//     new EmailService().notify(
//       `Deposit of $${amount} made to ${this.holderName}'s account. Current balance: $${this.balance}`,
//     );
//     new SMSService().notify(
//       `Deposit of $${amount} made to ${this.holderName}'s account. Current balance: $${this.balance}`,
//     );
//   }

//   withdraw(amount: number): void {
//     if (amount > this.balance) {
//       console.log(
//         `${this.holderName} attempted to withdraw $${amount}, but insufficient funds.`,
//       );
//       return;
//     }
//     this.balance -= amount;
//     console.log(
//       `${this.holderName} withdrew $${amount}. New balance: $${this.balance}`,
//     );
//     new EmailService().notify(
//       `Withdrawal of $${amount} made from ${this.holderName}'s account. Current balance: $${this.balance}`,
//     );
//     new SMSService().notify(
//       `Withdrawal of $${amount} made from ${this.holderName}'s account. Current balance: $${this.balance}`,
//     );
//   }
// }
