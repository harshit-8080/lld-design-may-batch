import { Threater } from "../threater/threater";

export class City {
  constructor(
    private id: string,
    private name: string,
    private threater: Threater[] = [],
  ) {}

  addTheater(newThreater: Threater) {
    this.threater.push(newThreater);
  }

  getCity(): string {
    return this.name;
  }

  getAllThreater(): Threater[] {
    return this.threater;
  }
}
