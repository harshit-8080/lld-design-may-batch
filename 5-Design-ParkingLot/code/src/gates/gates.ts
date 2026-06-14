import { ParkingLot } from "../parkingLot";
import { IPaymentMethod } from "../payment/payment";

export abstract class Gate {
  constructor(
    private gateId: string,
    protected parkingLot: ParkingLot,
    protected paymentMethod: IPaymentMethod = null,
    private isOperational: boolean = true,
  ) {}

  getGateId(): string {
    return this.gateId;
  }

  isGateOperational(): boolean {
    return this.isOperational;
  }
}
