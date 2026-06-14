// interface IPricingStrategy {

import { VEHICLE_TYPE } from "../enum";

export class PricingStrategyBySecond {
  static hourPerRate: Map<VEHICLE_TYPE, number> = new Map([
    [VEHICLE_TYPE.BIKE, 10],
    [VEHICLE_TYPE.CAR, 20],
    [VEHICLE_TYPE.BUS, 40],
  ]);

  static calculatePrice(
    vehicleType: VEHICLE_TYPE,
    durationInSeconds: number,
  ): number {
    return this.hourPerRate.get(vehicleType) * durationInSeconds;
  }
}
