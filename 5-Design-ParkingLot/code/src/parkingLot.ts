import { SPOT_SIZE } from "./enum";
import { EntranceGate } from "./gates/entranceGate";
import { ExitGate } from "./gates/exitGate";
import { ParkingSpot } from "./spots/parkingSpot";
import { Ticket } from "./tickets/tickets";

export class ParkingLot {
  constructor(
    private entranceGates: Map<string, EntranceGate> = new Map(),
    private exitGates: Map<string, ExitGate> = new Map(),
    private tickets: Map<string, Ticket> = new Map(),
    private parkingSpot: Map<string, ParkingSpot> = new Map(),
    private spotBySize: Map<SPOT_SIZE, ParkingSpot[]> = new Map(),
    // private admins = new Admin(),
  ) {
    this.spotBySize.set(SPOT_SIZE.SMALL, []);
    this.spotBySize.set(SPOT_SIZE.MEDIUM, []);
    this.spotBySize.set(SPOT_SIZE.LARGE, []);

    // {
    //     "small": ["small spot1", "small_pot2", "small_spot3"],
    //     "medium": ["medium spot1", "medium_spot2", "medium_spot3"],
    //     "large": ["large spot1", "large_)spot2", "large_spot3"],
    // }
  }

  saveToEntranceGates(gates: EntranceGate) {
    this.entranceGates.set(gates.getGateId(), gates);
  }

  saveToExitGates(gates: ExitGate) {
    this.exitGates.set(gates.getGateId(), gates);
  }

  //   notifyAdmin(message) {
  //     this.admins.sendMessage(message);
  //   }

  saveParkingSpots(spots: ParkingSpot) {
    this.parkingSpot.set(spots.getSpotId(), spots);

    const spotBySize = this.spotBySize.get(spots.getSpotSize());
    spotBySize.push(spots);
  }

  saveTickets(ticket: Ticket) {
    this.tickets.set(ticket.getTicketId(), ticket);
  }

  getSpotByTicketId(ticketId: string): ParkingSpot {
    const ticket = this.tickets.get(ticketId);
    const spotId = ticket.getSpotId();
    const spot = this.parkingSpot.get(spotId);
    return spot;
  }

  getRequiredSpotSize(requriedSpotSize: SPOT_SIZE): ParkingSpot {
    const spots = this.spotBySize.get(requriedSpotSize);

    // if exact match is available
    for (let i = 0; i < spots.length; i++) {
      if (spots[i].isSpotAvailable()) {
        return spots[i];
      }
    }

    // look for large spaces.......
    // for medium - just look for large space
    // for small - look for medium and large both

    if (requriedSpotSize == SPOT_SIZE.MEDIUM) {
      const largeSpots = this.spotBySize.get(SPOT_SIZE.LARGE);

      // search in large space
      for (let i = 0; i < largeSpots.length; i++) {
        if (largeSpots[i].isSpotAvailable()) {
          return largeSpots[i];
        }
      }
      // for small - look for medium and large both
    } else if (requriedSpotSize == SPOT_SIZE.SMALL) {
      const mediumSpots = this.spotBySize.get(SPOT_SIZE.MEDIUM);

      // search in medium space
      for (let i = 0; i < mediumSpots.length; i++) {
        if (mediumSpots[i].isSpotAvailable()) {
          return mediumSpots[i];
        }
      }
      const largeSpots = this.spotBySize.get(SPOT_SIZE.LARGE);

      // search in large space
      for (let i = 0; i < largeSpots.length; i++) {
        if (largeSpots[i].isSpotAvailable()) {
          return largeSpots[i];
        }
      }
    } else {
      console.log("no space available...........");
      throw console.error("no parking space available");
    }
  }
}
