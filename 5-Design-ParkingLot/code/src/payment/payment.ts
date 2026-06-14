import { PAYEMNT_STATUS } from "../enum";

export interface IPaymentMethod {
  makePayment(amount: number): PAYEMNT_STATUS;
}

export class CreditCard implements IPaymentMethod {
  makePayment(amount: number): PAYEMNT_STATUS {
    console.log("payment done using credit card for amount", amount);
    return PAYEMNT_STATUS.SUCCESS;
  }
}
export class DebitCard implements IPaymentMethod {
  makePayment(amount: number): PAYEMNT_STATUS {
    console.log("payment done using debit card for amount", amount);
    return PAYEMNT_STATUS.SUCCESS;
  }
}

export class UPI implements IPaymentMethod {
  makePayment(amount: number): PAYEMNT_STATUS {
    console.log("payment done using UPI for amount", amount);
    return PAYEMNT_STATUS.SUCCESS;
  }
}
