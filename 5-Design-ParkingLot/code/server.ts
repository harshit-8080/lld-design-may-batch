import { SPOT_SIZE, VEHICLE_TYPE } from "./src/enum";
import { EntranceGate } from "./src/gates/entranceGate";
import { ExitGate } from "./src/gates/exitGate";
import { ParkingLot } from "./src/parkingLot";
import { CreditCard } from "./src/payment/payment";
import { ParkingSpot } from "./src/spots/parkingSpot";
import { generateRandomId } from "./src/vehicle/utils";
import { Bike, Bus, Car, VehicleFactory } from "./src/vehicle/vehicle";

const amb_parking_lot = new ParkingLot();

const harshit_bike = VehicleFactory.createVehicle(
  VEHICLE_TYPE.CAR,
  generateRandomId(),
);

const entrance_gate_1 = new EntranceGate(generateRandomId(), amb_parking_lot);
const entrance_gate_2 = new EntranceGate(generateRandomId(), amb_parking_lot);
const entrance_gate_3 = new EntranceGate(generateRandomId(), amb_parking_lot);
amb_parking_lot.saveToEntranceGates(entrance_gate_1);
amb_parking_lot.saveToEntranceGates(entrance_gate_2);
amb_parking_lot.saveToEntranceGates(entrance_gate_3);

const creditCard = new CreditCard(); // not a good code....

const exis_gate_1 = new ExitGate(
  generateRandomId(),
  amb_parking_lot,
  creditCard,
);
const exis_gate_2 = new ExitGate(
  generateRandomId(),
  amb_parking_lot,
  creditCard,
);

amb_parking_lot.saveToExitGates(exis_gate_1);
amb_parking_lot.saveToExitGates(exis_gate_2);

const spot_small_1 = new ParkingSpot(generateRandomId(), SPOT_SIZE.SMALL);
const spot_small_2 = new ParkingSpot(generateRandomId(), SPOT_SIZE.SMALL);
const spot_small_3 = new ParkingSpot(generateRandomId(), SPOT_SIZE.SMALL);
const spot_small_4 = new ParkingSpot(generateRandomId(), SPOT_SIZE.SMALL);

const spot_medium_1 = new ParkingSpot(generateRandomId(), SPOT_SIZE.SMALL);
const spot_medium_2 = new ParkingSpot(generateRandomId(), SPOT_SIZE.MEDIUM);
const spot_medium_3 = new ParkingSpot(generateRandomId(), SPOT_SIZE.MEDIUM);
const spot_medium_4 = new ParkingSpot(generateRandomId(), SPOT_SIZE.MEDIUM);

amb_parking_lot.saveParkingSpots(spot_small_1);
amb_parking_lot.saveParkingSpots(spot_small_2);
amb_parking_lot.saveParkingSpots(spot_small_3);
amb_parking_lot.saveParkingSpots(spot_small_4);

amb_parking_lot.saveParkingSpots(spot_medium_1);
amb_parking_lot.saveParkingSpots(spot_medium_2);
amb_parking_lot.saveParkingSpots(spot_medium_3);
amb_parking_lot.saveParkingSpots(spot_medium_4);

const ticket = entrance_gate_1.processVehicleEntry(harshit_bike);
console.log("ticket ", ticket);
amb_parking_lot.saveTickets(ticket);

setTimeout(() => {
  exis_gate_1.processVehicleExit(ticket);
  console.log("ticket ", ticket);
}, 5000);
