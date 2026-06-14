import { SPOT_SIZE, SPOT_STATUS } from "../enum";
import { IVehicle } from "../vehicle/vehicle";

export class ParkingSpot {
  constructor(
    private spotId: string,
    private spotSize: SPOT_SIZE,
    private spotStatus: SPOT_STATUS = SPOT_STATUS.AVAIALBLE,
    private currentParkedVehicle: IVehicle = null,
    private parkedVehicleHistory: IVehicle[] = [],
  ) {}

  getSpotId(): string {
    return this.spotId;
  }

  getSpotSize(): SPOT_SIZE {
    return this.spotSize;
  }

  getSpotStatus(): SPOT_STATUS {
    return this.spotStatus;
  }

  isSpotAvailable(): boolean {
    return this.getSpotStatus() == SPOT_STATUS.AVAIALBLE ? true : false;
  }

  getParkedVehicle(): IVehicle {
    return this.currentParkedVehicle;
  }

  getParkedVehicleHistory(): IVehicle[] {
    return this.parkedVehicleHistory;
  }

  releaseSpot() {
    this.spotStatus = SPOT_STATUS.AVAIALBLE;
    this.currentParkedVehicle = null;
  }

  blockSpot(vehicle: IVehicle): void {
    if (this.spotStatus == SPOT_STATUS.AVAIALBLE) {
      this.spotStatus = SPOT_STATUS.BLOCKED;
      this.currentParkedVehicle = vehicle;
    } else {
      console.log("spot is not available for blocking");
    }
  }

  bookSpot(vehicle: IVehicle): void {
    if (
      this.spotStatus == SPOT_STATUS.BLOCKED &&
      this.currentParkedVehicle.getVehicleNumber() == vehicle.getVehicleNumber()
    ) {
      this.spotStatus = SPOT_STATUS.BOOKED;
      this.currentParkedVehicle = vehicle;
    } else {
      console.log("spot is not available for booking");
    }
  }
}
