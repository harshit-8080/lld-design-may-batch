// interface PaymentMethod {
//     pay(amount: number): void;
// }


// class CreditCard implements PaymentMethod {
//     pay(amount: number) {
//         console.log(`Paying ${amount} using credit card.`);
//     }
// }

// class DebitCard implements PaymentMethod {
//     pay(amount: number) {
//         console.log(`Paying ${amount} using debit card.`);
//     }
// }

// class UPI implements PaymentMethod {
//     pay(amount: number) {
//         console.log(`Paying ${amount} using UPI.`);
//     }
// }

// class Wallet implements PaymentMethod {
//     pay(amount: number) {
//         console.log(`Paying ${amount} using wallet.`);
//     }
// }



// // depend on abstraction not on concrete classes......
// class PaymentProcessor {
//     processPayment(amount: number, method: PaymentMethod) {
//         method.pay(amount);
//     }
// }


// new PaymentProcessor().processPayment(100, new CreditCard());
// new PaymentProcessor().processPayment(200, new DebitCard());
// new PaymentProcessor().processPayment(300, new UPI());  

// new PaymentProcessor().processPayment(300, new Wallet());  


