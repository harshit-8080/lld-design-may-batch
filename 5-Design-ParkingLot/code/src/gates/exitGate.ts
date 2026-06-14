import { PAYEMNT_STATUS, TICKET_STATUS } from "../enum";
import { ParkingLot } from "../parkingLot";
import { IPaymentMethod } from "../payment/payment";
import { PricingStrategyBySecond } from "../pricing/priceStrategy";
import { Ticket } from "../tickets/tickets";
import { Gate } from "./gates";

export class ExitGate extends Gate {
  constructor(gateId, parkingLot: ParkingLot, paymentMethod: IPaymentMethod) {
    super(gateId, parkingLot, paymentMethod);
  }
  processVehicleExit(ticket: Ticket): any {
    // step 1: check for ticket
    if (ticket.getTickeStatus() == TICKET_STATUS.EXPIRED) {
      console.log("ticket is expired");
      throw console.error("ticket is expired........");
    }

    ticket.setExitTime();

    const parkedSpot = this.parkingLot.getSpotByTicketId(ticket.getTicketId());
    const currentParkedVehicle = parkedSpot.getParkedVehicle();

    const durationInSecond = ticket.getParkingDuration();

    console.log("durationInSecond ", durationInSecond);

    // step 2: calcualte pricing...................
    const amount = PricingStrategyBySecond.calculatePrice(
      currentParkedVehicle.getVehicleType(),
      durationInSecond,
    );
    ticket.setAmount(amount);
    console.log("amount - ", amount);

    // step 3: payment
    // step 4: update payment status and spot status
    const paymentStatus = this.paymentMethod.makePayment(amount);
    if (paymentStatus == PAYEMNT_STATUS.SUCCESS) {
      ticket.updateTicketStatus(TICKET_STATUS.PAID);
      parkedSpot.releaseSpot();
    } else {
      throw console.error("error while exit, try again...............");
    }

    // this.parkingLot.notifyAdmin("vehicle has not exited..... ");
  }
}
