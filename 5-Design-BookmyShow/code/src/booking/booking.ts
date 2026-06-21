import { PAYMENT_STATUS } from "../enum";
import { Show, ShowSeat } from "../show/show";

export class Booking {
  constructor(
    public id: string,
    public userId: string,
    public show: Show,
    public seats: ShowSeat[],
    public totalAmount: number,
    public paymenytStatus?: PAYMENT_STATUS,
  ) {}

  confirmBooking() {
    this.seats.forEach((seat) => {
      seat.book();
    });
  }
  cancelBokking() {
    this.seats.forEach((seat) => {
      seat.relase();
    });
  }
}

// [2P, 3G, 4S], SHOW infor, paymentStraget, discoint
