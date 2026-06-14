import { PAYEMNT_METHOD, PAYEMNT_STATUS } from "../enum";

export interface IPaymentMethod {
  makePayment(amount: number): PAYEMNT_STATUS;
  getPaymentMethod();
}

export class CreditCard implements IPaymentMethod {
  makePayment(amount: number): PAYEMNT_STATUS {
    console.log("payment done using credit card for amount", amount);
    return PAYEMNT_STATUS.SUCCESS;
  }
  getPaymentMethod() {
    return PAYEMNT_METHOD.CREDIT;
  }
}
export class DebitCard implements IPaymentMethod {
  makePayment(amount: number): PAYEMNT_STATUS {
    console.log("payment done using debit card for amount", amount);
    return PAYEMNT_STATUS.SUCCESS;
  }
  getPaymentMethod() {
    return PAYEMNT_METHOD.DEBIT;
  }
}

export class UPI implements IPaymentMethod {
  makePayment(amount: number): PAYEMNT_STATUS {
    console.log("payment done using UPI for amount", amount);
    return PAYEMNT_STATUS.SUCCESS;
  }
  getPaymentMethod() {
    return PAYEMNT_METHOD.UPI;
  }
}
