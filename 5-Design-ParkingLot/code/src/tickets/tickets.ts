import { PAYEMNT_METHOD, TICKET_STATUS } from "../enum";

export class Ticket {
  constructor(
    private ticketId: string,
    private vehicleNumber: string,
    private spotId: string,
    private entryTime: Date = new Date(),
    private exitTime: Date = null,
    private ticketStatus: TICKET_STATUS = TICKET_STATUS.PENDING,
    private paymentMethod: PAYEMNT_METHOD = null,
    private amount: number = null,
  ) {}

  getTicketId(): string {
    return this.ticketId;
  }

  getVehicleNumber(): string {
    return this.vehicleNumber;
  }

  getTickeStatus(): TICKET_STATUS {
    return this.ticketStatus;
  }

  getSpotId(): string {
    return this.spotId;
  }

  getEntryTime(): Date {
    return this.entryTime;
  }

  getExitTime(): Date {
    return this.exitTime;
  }

  setExitTime() {
    this.exitTime = new Date();
    console.log("exit time", this.exitTime);
  }

  setPaymentMethod(method: PAYEMNT_METHOD) {
    this.paymentMethod = method;
  }

  updateTicketStatus(status: TICKET_STATUS) {
    this.ticketStatus = status;
  }

  setAmount(amount: number): void {
    this.amount = amount;
  }

  getParkingDuration(): number {
    const durationInHours =
      this.exitTime.getSeconds() - this.entryTime.getSeconds();
    return durationInHours;
  }
}
