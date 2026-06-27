export enum USER_TYPE {
  USER = "USER",
  ADMIN = "ADMIN",
}

export enum PAYMENT_STATUS {
  IN_PROGRESS = "IN_PROGRESS",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

export enum SEAT_TYPE {
  PLATINUM = "PLATINUM",
  GOLD = "GOLD",
  SILVER = "SILVER",
}

export enum SEAT_STATUS {
  BLOCKED = "BLOCKED",
  BOOKED = "BOOKED",
  AVAILABLE = "AVAILABLE",
}

export function generateRandomID(): string {
  return crypto.randomUUID();
}

// {type:PLATINUM, count:20},  {type:GOLD, count:40},  {type:SILVER, count:60}
export type SeatLayout = { type: SEAT_TYPE; count: number };

export type ShowPrice = { type: SEAT_TYPE; price: number };

/**
 * platium - price 300
 * gold - 200
 * silver - 100
 */
