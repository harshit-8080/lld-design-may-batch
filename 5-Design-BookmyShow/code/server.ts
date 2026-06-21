import { BookingManager } from "./src/booking/bookingManager";
import { City } from "./src/city/city";
import { generateRandomID, SEAT_TYPE } from "./src/enum";
import {
  FlatDiscount,
  PercentageDiscount,
} from "./src/paymentAndDiscounr/discount";
import { CreditCard } from "./src/paymentAndDiscounr/payment";
import { Screenn } from "./src/screen/screen";
import { Show } from "./src/show/show";
import { Threater } from "./src/threater/threater";
import { User } from "./src/user/user";

const city = new City(generateRandomID(), "HYD");
const bookingManager = BookingManager.getInstance();

const amb_threater = new Threater(generateRandomID(), "AMB_CINEMA", "KOndapur");
const allu_cinema = new Threater(generateRandomID(), "ALLU_CINEMA", "KOKAPET");

city.addTheater(amb_threater);
city.addTheater(allu_cinema);

const amb_screen_1 = new Screenn(generateRandomID(), "SCREEN_1", amb_threater);
const amb_screen_2 = new Screenn(generateRandomID(), "SCREEN_2", amb_threater);
const amb_screen_3 = new Screenn(generateRandomID(), "SCREEN_3", amb_threater);

amb_screen_1.configureSeats([
  { type: SEAT_TYPE.PLATINUM, count: 20 },
  { type: SEAT_TYPE.GOLD, count: 40 },
  { type: SEAT_TYPE.SILVER, count: 60 },
]);

amb_screen_2.configureSeats([
  { type: SEAT_TYPE.PLATINUM, count: 10 },
  { type: SEAT_TYPE.GOLD, count: 20 },
  { type: SEAT_TYPE.SILVER, count: 30 },
]);

amb_screen_3.configureSeats([
  { type: SEAT_TYPE.PLATINUM, count: 30 },
  { type: SEAT_TYPE.GOLD, count: 40 },
  { type: SEAT_TYPE.SILVER, count: 50 },
]);

const disclousre_day = new Show(
  generateRandomID(),
  "DISCLOUSRE_DAY",
  amb_screen_3,
  new Date(),
  [
    { type: SEAT_TYPE.PLATINUM, price: 500 },
    { type: SEAT_TYPE.GOLD, price: 300 },
    { type: SEAT_TYPE.SILVER, price: 200 },
  ],
);

const startTime = new Date(Date.now() + 2 * 60 * 60 * 1000);
const obsession = new Show(
  generateRandomID(),
  "OBSESSIOn",
  amb_screen_3,
  startTime,
  [
    { type: SEAT_TYPE.PLATINUM, price: 200 },
    { type: SEAT_TYPE.GOLD, price: 100 },
    { type: SEAT_TYPE.SILVER, price: 50 },
  ],
);

// disclousre_day.getAllSeatStatus();

disclousre_day.getStatusForASeat("A1");
const harshit = new User(generateRandomID(), "Harshit", "abcd", "9977");
bookingManager.bookTickets(
  harshit,
  disclousre_day,
  ["A1"],
  new CreditCard(),
  new PercentageDiscount(10),
);

disclousre_day.getStatusForASeat("A1");

console.log("obession detail==================================");

obsession.getStatusForASeat("A1");
const arun = new User(generateRandomID(), "arun", "abcd", "9977");
bookingManager.bookTickets(
  arun,
  obsession,
  ["A1"],
  new CreditCard(),
  new PercentageDiscount(10),
);

obsession.getStatusForASeat("A1");
