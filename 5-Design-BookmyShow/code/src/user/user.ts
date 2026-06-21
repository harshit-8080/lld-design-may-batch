import { USER_TYPE } from "../enum";

export class User {
  constructor(
    private id: string,
    private name: string,
    private password: string,
    private contact: string,
    private type: USER_TYPE = USER_TYPE.USER,
    private booking: any[] = [],
  ) {}

  // skipping... writting getter

  getUserId(): string {
    return this.id;
  }
  getBooking(): any[] {
    return this.booking;
  }

  addBooing(newBooking: any) {
    this.booking.push(newBooking);
  }

  receiveNotification(message: string) {
    console.log(message);
  }
}
