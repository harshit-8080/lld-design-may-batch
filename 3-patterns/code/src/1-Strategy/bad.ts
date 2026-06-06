// class DebitCard {
//   makePayment(amount: number) {
//     console.log(`Processing debit card payment of $${amount}`);
//   }
// }

// class CreditCard {
//   makePayment(amount: number) {
//     console.log(`Processing credit card payment of $${amount}`);
//   }
// }

// class UPI {
//   makePayment(amount: number) {
//     console.log(`Processing UPI payment of $${amount}`);
//   }
// }

// class PaymentProcessor {
//   makePayment(amount: number, method: string) {
//     if (method === "creditCard") {
//       new CreditCard().makePayment(amount);
//     } else if (method === "UPI") {
//       new UPI().makePayment(amount);
//     } else if (method === "debitCard") {
//       new DebitCard().makePayment(amount);
//     }
//   }
// }

// const paymentObj = new PaymentProcessor();
// paymentObj.makePayment(100, "creditCard");
// paymentObj.makePayment(200, "debitCard");
// paymentObj.makePayment(300, "UPI");
