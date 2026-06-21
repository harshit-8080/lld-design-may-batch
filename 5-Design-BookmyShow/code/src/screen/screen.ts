import { generateRandomID, SeatLayout } from "../enum";
import { Seat } from "../seat/seat";
import { Show } from "../show/show";
import { Threater } from "../threater/threater";

export class Screenn {
  constructor(
    public id: string,
    public name: string,
    public threater: Threater,
    public shows: Show[] = [],
    public seats: Seat[] = [],
  ) {
    this.threater.addScreen(this);
  }

  addShow(newShow: Show) {
    this.shows.push(newShow);
  }

  /**
   *
   * [
   * {type:PLATINUM, count:20},  {type:GOLD, count:40},  {type:SILVER, count:60}
   * ]
   * Screen 1
   * PLATINUM : 20 -> A1, A2..................... A10 (in row 10)
   *                  B1, B2......................B20
   *
   * GOLD : 40 ->
   *                 C1............................C10
   *                 D1............................D10
   *                 E1............................E10
   *                 F1............................F10
   * SILVER: 60
   *                G1                             G10
   *                H1
   *                I1
   *                J1
   */

  //     // [
  //     { type: SEAT_TYPE.PLATINUM, count: 10 }, 10 seats
  //     { type: SEAT_TYPE.GOLD, count: 20 }, 20 searts
  //     { type: SEAT_TYPE.SILVER, count: 30 }, 30 seat
  //.    ]

  configureSeats(seatLayout: SeatLayout[]) {
    const rowCharCode = "A".charCodeAt(0);

    let index = 0;

    for (let layout of seatLayout) {
      for (let i = 1; i <= layout.count; i++) {
        const row = String.fromCharCode(rowCharCode + Math.floor(index / 10));
        const numberInRow = (index % 10) + 1;

        // labe A1 to A10
        const label = row + numberInRow;

        // creating new seat with label and type....
        const newSeat = new Seat(generateRandomID(), label, layout.type);
        index++;
        this.seats.push(newSeat);
      }
    }
  }
}
