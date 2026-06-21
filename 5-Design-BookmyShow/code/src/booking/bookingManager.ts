import { generateRandomID, PAYMENT_STATUS } from "../enum";
import { IDiscount } from "../paymentAndDiscounr/discount";
import { IPayment } from "../paymentAndDiscounr/payment";
import { Show } from "../show/show";
import { User } from "../user/user";
import { Booking } from "./booking";

export class BookingManager {
  static instance: BookingManager;

  private constructor() {}

  static getInstance(): BookingManager {
    if (this.instance == null) {
      this.instance = new BookingManager();
    }
    return this.instance;
  }

  bookTickets(
    user: User,
    show: Show,
    seatLabels: string[], // ["A1", "B13", "C12", "C34"]
    paymentStrategy?: IPayment,
    discountStrategy?: IDiscount,
  ) {
    // check if selected seats are available or not
    // if they are available blocked them....
    const selectedShowSeats = seatLabels.map((label) => {
      const showSeat = show.seats.get(label);
      if (!showSeat.isAvailable()) {
        throw Error("selected seat are not available");
      }
      showSeat.block();
      return showSeat;
    });

    const amount = selectedShowSeats.reduce((sum, showSeat) => {
      const seatType = showSeat.seat.seatType;

      let price = 0;
      show.showPrice.forEach((layout) => {
        if (layout.type == seatType) {
          price = layout.price;
        }
      });

      return sum + price;
    }, 0);

    console.log("before discount ", amount);
    const afterDiscount = discountStrategy.discount(amount);
    const payment = paymentStrategy.pay(afterDiscount);

    if (payment == PAYMENT_STATUS.SUCCESS) {
      const newBookig = new Booking(
        generateRandomID(),
        user.getUserId(),
        show,
        selectedShowSeats,
        amount,
        PAYMENT_STATUS.SUCCESS,
      );

      newBookig.confirmBooking();

      const message =
        "you movies has been booked " +
        show.name +
        " payment is completed as well";
      user.receiveNotification(message);
    } else {
      setTimeout(() => {
        selectedShowSeats.map((seat) => {
          seat.relase();

          const message = "You payment failed for " + show.name;
          user.receiveNotification(message);
        });
      }, 10000);
    }
  }
}
