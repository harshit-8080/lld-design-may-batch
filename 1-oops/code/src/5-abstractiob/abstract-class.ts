abstract class AbstractPaymentProcessor {
    welcomeMessage(): void {
        console.log("Welcome to the payment processor");
    }
    abstract startTransaction(amount: number): void;
    abstract makePayment(amount: number): void;
    abstract endTransaction(): void;
}

class CreditCardPaymentProcessor extends AbstractPaymentProcessor {
    startTransaction(amount: number): void {
        console.log(`Starting credit card transaction for amount: ${amount}`);
    }
    makePayment(amount: number): void {
        console.log(`Processing credit card payment of amount: ${amount}`);
    }
    endTransaction(): void {
        console.log("Ending credit card transaction");
    }
}

class UpiPaymentProcessor extends AbstractPaymentProcessor {
    startTransaction(amount: number): void {
        console.log(`Starting UPI transaction for amount: ${amount}`);
    }
    makePayment(amount: number): void {
        console.log(`Processing UPI payment of amount: ${amount}`);
    }
    endTransaction(): void {
        console.log("Ending UPI transaction");
    }
}

function makePayment(processor: AbstractPaymentProcessor, amount: number) {
    processor.startTransaction(amount);
    processor.makePayment(amount);
    processor.endTransaction();
}

makePayment(new CreditCardPaymentProcessor(), 100);
makePayment(new UpiPaymentProcessor(), 200);
