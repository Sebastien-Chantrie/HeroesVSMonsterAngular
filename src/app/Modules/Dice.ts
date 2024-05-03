export class Dice {
  minimum: number = 1;
  maximum: number;

  constructor(face: number) {
    this.maximum = face;
  }

  LaunchDice(): number {
    return Math.floor(Math.random() * (this.maximum + 1));
  }
}
