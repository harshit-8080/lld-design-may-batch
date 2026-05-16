// class BasePaymentMethod {
//     pay(amount: number) {
//         console.log(`Paying ${amount} using base payment method.`);
//     }
//     refundPay( amount: number) {
//         console.log(`Refunding ${amount} using base payment method.`);
//     }
// }

// class CreditCard extends BasePaymentMethod {
//     pay(amount: number) {
//         console.log(`Paying ${amount} using credit card.`);
//     }
//     refundPay( amount: number) {
//         console.log(`Refunding ${amount} using credit card.`);
//     }
// }

// class DebitCard extends BasePaymentMethod {
//     pay(amount: number) {
//         console.log(`Paying ${amount} using debit card.`);
//     }
//     refundPay( amount: number) {
//         console.log(`Refunding ${amount} using debit card.`);
//     }
// }

// class UPI extends BasePaymentMethod {
//     pay(amount: number) {
//         console.log(`Paying ${amount} using UPI.`);
//     }
//     refundPay( amount: number) {
//         console.log(`Refunding ${amount} using UPI.`);
//     }
// }

// class CashOnDelivery extends BasePaymentMethod {
//     pay(amount: number) {
//         console.log(`Paying ${amount} using cash on delivery.`);
//     }
//     refundPay( amount: number) {
//         throw new Error("Refund not supported for cash on delivery.");
//     }
// }


// const basePM = new BasePaymentMethod();

// const cashPM = new CashOnDelivery();

// cashPM.pay(100);
// cashPM.refundPay(100);



// class Bird {
//     speak(){
//         console.log("speak...");
//     }

//     eat(){
//         console.log("eat...");
//     }

//     fly(){
//         console.log("fly...");
//     }

// }

// // class Sparrow extends Bird {
// //     fly(){
// //         console.log("Sparrow flying...");
// //     }
// // }

// class Ostrict extends Bird {
//     fly(){
//         throw new Error("Ostrich can't fly.");
//     }
// }

// const bird = new Bird()


// bird.speak();
// bird.speak();
// bird.speak();
// bird.speak();
// bird.speak();
// bird.speak();
// bird.speak();
// bird.speak();
// bird.speak();
// bird.speak();
// bird.speak();
// bird.speak();
// bird.speak();
// bird.speak();
// bird.speak();


