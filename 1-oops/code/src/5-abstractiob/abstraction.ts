// class DebitCardPayment {
//     makePayment(name:string, amount: number): void {
//         console.log(`Payment of ${amount} made successfully using Debit Card.`);
//     }
// }

// class CreditCardPayment {
//     makePaymentXYZ(amount: number): void {
//         console.log(`Payment of ${amount} made successfully using Credit Card.`);
//     }
// }

// class UPIpayment {
//     makePaymentASDF(amount: number): void {
//         console.log(`Payment of ${amount} made successfully using UPI.`);
//     }
// }

// class WalletPayment {
//     makePaymentOOPS(amount: number): void {
//         console.log(`Payment of ${amount} made successfully using Wallet.`);
//     }
// }


// class Payment{
//     makePayment(amount: number, paymentMethod: string): void {
//        if (paymentMethod === 'debit') {
//         const debitCardPayment = new DebitCardPayment();
//         debitCardPayment.makePayment("John Doe", amount);
//        } else if (paymentMethod === 'credit') {
//         const creditCardPayment = new CreditCardPayment();
//         creditCardPayment.makePayment(amount);
//        } else if (paymentMethod === 'upi') {
//         const upiPayment = new UPIpayment();
//         upiPayment.makePayment(amount);
//        } else if (paymentMethod === 'wallet') {
//         const walletPayment = new WalletPayment();
//         walletPayment.makePayment(amount);
//        }else {
//         console.log('Invalid payment method');
//        }
//     }
// }