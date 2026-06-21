import { PAYMENT_STATUS } from "../enum";

export interface IDiscount {
  discount(baseAmount: number): number;
}

export class FlatDiscount implements IDiscount {
  constructor(private save: number) {}
  discount(baseAmount: number): number {
    return baseAmount - this.save;
  }
}

export class PercentageDiscount implements IDiscount {
  constructor(private save10Cent: number) {}
  discount(baseAmount: number): number {
    return baseAmount - (this.save10Cent / 100) * baseAmount;
  }
}
