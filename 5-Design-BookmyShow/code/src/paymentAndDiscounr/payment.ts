import { PAYMENT_STATUS } from "../enum";

export interface IPayment {
  pay(amount: number): PAYMENT_STATUS;
  refund(amount: number): PAYMENT_STATUS;
}

export class CreditCard implements IPayment {
  refund(amount: number): PAYMENT_STATUS {
    console.log("refine done for amount", amount);
    return PAYMENT_STATUS.SUCCESS;
  }
  pay(amount: number): PAYMENT_STATUS {
    console.log("payment done for amount", amount);
    return PAYMENT_STATUS.SUCCESS;
  }
}
