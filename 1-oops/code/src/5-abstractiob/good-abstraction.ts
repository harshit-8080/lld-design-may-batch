interface PaymentMethod {
    makePayment(amount: number): void;
    refundPayment(amount: number): void;
}

class DebitCardPayment implements PaymentMethod {
    getCardDetails(): string {
        return "Card details";
    }
    makePayment(amount: number): void {
        console.log(`Payment of ${amount} made successfully using Debit Card.`);
    }
    refundPayment(amount: number): void{
        console.log("refund amount via debit", amount);
    }
}

class CreditCardPayment implements PaymentMethod {
    getCardINFO(): string {
        return "Card details";
    }

    makePayment(amount: number): void {
        console.log(`Payment of ${amount} made successfully using Credit Card.`);
    }
    refundPayment(amount: number): void{
        console.log("refund amount via credit", amount);
    }
}

class UPIpayment implements PaymentMethod {
    makePayment(amount: number): void {
        console.log(`Payment of ${amount} made successfully using UPI.`);
    }
    refundPayment(amount: number): void{
        console.log("refund amount via upi", amount);
    }
}

class WalletPayment implements PaymentMethod {
    makePayment(amount: number): void {
        console.log(`Payment of ${amount} made successfully using Wallet.`);
    }
    refundPayment(amount: number): void{
        console.log("refund amount via wallet", amount);
    }
}

class Coins implements PaymentMethod{
    makePayment(amount: number): void {
        console.log("coins make payemnt");
    }
    refundPayment(amount: number): void {
        console.log("coins refund payment");
    }
    
}

class Payment {
    processPayment(amount: number, pm: PaymentMethod): void {
        pm.makePayment(amount);
    }
}

class XYZ implements PaymentMethod{
    makePayment(amount: number): void {
        console.log("xyz make payment");
    }
    refundPayment(amount: number): void {
        console.log("xyz refund payment");
    }   
}


const payment_obj = new Payment()
payment_obj.processPayment(200, new XYZ())

// payment_obj.processPayment(100, new DebitCardPayment())
// payment_obj.processPayment(400, new CreditCardPayment())
// payment_obj.processPayment(800, new UPIpayment())
// payment_obj.processPayment(1900, new WalletPayment())

// payment_obj.processPayment(200, new Coins())