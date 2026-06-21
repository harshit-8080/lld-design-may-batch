import { Screenn } from "../screen/screen";

export class Threater {
  constructor(
    private id: string,
    private name: string,
    private address: string,
    private screen: Screenn[] = [],
  ) {}

  addScreen(newScreen: Screenn) {
    this.screen.push(newScreen);
  }

  getAllScreen(): Screenn[] {
    return this.screen;
  }
}
