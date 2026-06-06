interface PaymentMethod {
  makePayment(amount: number): void;
}

class DebitCard implements PaymentMethod {
  makePayment(amount: number) {
    console.log(`Processing debit card payment of $${amount}`);
  }
}

class CreditCard implements PaymentMethod {
  makePayment(amount: number) {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

class UPI implements PaymentMethod {
  makePayment(amount: number) {
    console.log(`Processing UPI payment of $${amount}`);
  }
}

class Wallet implements PaymentMethod {
  makePayment(amount: number) {
    console.log(`Processing wallet payment of $${amount}`);
  }
}

class PaymentProcessor {
  private paymentStrategy: PaymentMethod = null;

  setStrategy(strategy: PaymentMethod) {
    this.paymentStrategy = strategy;
  }

  makePayment(amount: number) {
    this.paymentStrategy.makePayment(amount);
  }
}

const harshit_payment = new PaymentProcessor();
harshit_payment.setStrategy(new CreditCard());
harshit_payment.makePayment(100);

harshit_payment.setStrategy(new DebitCard());
harshit_payment.makePayment(200);

harshit_payment.setStrategy(new UPI());
harshit_payment.makePayment(300);

harshit_payment.setStrategy(new Wallet());
harshit_payment.makePayment(400);
