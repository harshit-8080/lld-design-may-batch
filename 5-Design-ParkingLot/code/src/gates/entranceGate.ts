import { ParkingLot } from "../parkingLot";
import { Ticket } from "../tickets/tickets";
import { generateRandomId } from "../vehicle/utils";
import { IVehicle } from "../vehicle/vehicle";
import { Gate } from "./gates";

export class EntranceGate extends Gate {
  constructor(gateId: string, parkingLot: ParkingLot) {
    super(gateId, parkingLot);
  }
  processVehicleEntry(vehicle: IVehicle): any {
    // step 1: get desired vehicle spot size
    const requiredSpotSize = vehicle.getVehicleSpotSize();

    const availableSpot = this.parkingLot.getRequiredSpotSize(requiredSpotSize);

    // step 2: block the spot
    availableSpot.blockSpot(vehicle);

    // step32: create a ticket
    const tickets = new Ticket(
      generateRandomId(),
      vehicle.getVehicleNumber(),
      availableSpot.getSpotId(),
    );

    // step 4: book the spot
    availableSpot.bookSpot(vehicle);

    // this.parkingLot.notifyAdmin(" new vehicle has been entried to spot ");
    return tickets;
  }
}
