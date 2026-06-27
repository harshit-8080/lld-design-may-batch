import { SEAT_STATUS, ShowPrice } from "../enum";
import { Screenn } from "../screen/screen";
import { Seat } from "../seat/seat";
import { Threater } from "../threater/threater";

export class ShowSeat {
  constructor(
    private showID: string,
    public seat: Seat,
    private status: SEAT_STATUS,
  ) {}

  getShowId() {
    return this.showID;
  }

  block() {
    this.status = SEAT_STATUS.BLOCKED;
  }
  book() {
    this.status = SEAT_STATUS.BOOKED;
  }
  relase() {
    this.status = SEAT_STATUS.AVAILABLE;
  }

  isAvailable(): boolean {
    return this.status == SEAT_STATUS.AVAILABLE ? true : false;
  }
}

export class Show {
  constructor(
    public id: string,
    public name: string,
    public screen: Screenn,
    public startTime: Date,
    public showPrice: ShowPrice[],
    public isCancellable: boolean = true,

    public seats: Map<string, ShowSeat> = new Map(),
  ) {
    this.screen.addShow(this);

    this.screen.seats.forEach((seat) => {
      const seatStatusPerShow = new ShowSeat(
        this.id,
        seat,
        SEAT_STATUS.AVAILABLE,
      );

      this.seats.set(seat.seatLable, seatStatusPerShow);
    });
  }

  getAllSeatStatus() {
    console.log(this.seats);
  }

  getStatusForASeat(seatLabel: string) {
    console.log(this.seats.get(seatLabel));
  }
}
