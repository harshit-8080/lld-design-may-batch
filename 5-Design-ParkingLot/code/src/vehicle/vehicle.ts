import { SPOT_SIZE, VEHICLE_TYPE } from "../enum";

export interface IVehicle {
  getVehicleNumber(): string;
  getVehicleType(): VEHICLE_TYPE;
  getVehicleSpotSize(): SPOT_SIZE;
}

export class Bike implements IVehicle {
  constructor(
    private vehicleNumber: string,
    private vehicleType: VEHICLE_TYPE = VEHICLE_TYPE.BIKE,
  ) {}
  getVehicleNumber(): string {
    return this.vehicleNumber;
  }

  getVehicleType(): VEHICLE_TYPE {
    return this.vehicleType;
  }

  getVehicleSpotSize(): SPOT_SIZE {
    return SPOT_SIZE.SMALL;
  }
}

export class Car implements IVehicle {
  constructor(
    private vehicleNumber: string,
    private vehicleType: VEHICLE_TYPE = VEHICLE_TYPE.CAR,
  ) {}
  getVehicleNumber(): string {
    return this.vehicleNumber;
  }
  getVehicleType(): VEHICLE_TYPE {
    return this.vehicleType;
  }

  getVehicleSpotSize(): SPOT_SIZE {
    return SPOT_SIZE.MEDIUM;
  }
}

export class Bus implements IVehicle {
  constructor(
    private vehicleNumber: string,
    private vehicleType: VEHICLE_TYPE = VEHICLE_TYPE.BUS,
  ) {}
  getVehicleNumber(): string {
    return this.vehicleNumber;
  }
  getVehicleType(): VEHICLE_TYPE {
    return this.vehicleType;
  }

  getVehicleSpotSize(): SPOT_SIZE {
    return SPOT_SIZE.LARGE;
  }
}

export class VehicleFactory {
  static createVehicle(type: VEHICLE_TYPE, number: string) {
    switch (type) {
      case VEHICLE_TYPE.BIKE:
        return new Bike(number);
      case VEHICLE_TYPE.CAR:
        return new Car(number);
      case VEHICLE_TYPE.BUS:
        return new Bus(number);
      default:
        break;
    }
  }
}
