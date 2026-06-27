import { SEAT_TYPE } from "../enum";

export class Seat {
  constructor(
    public id: string, //UUID
    public seatLable: string, // A1, A2, B8, G6
    public seatType: SEAT_TYPE,
  ) {}
}
