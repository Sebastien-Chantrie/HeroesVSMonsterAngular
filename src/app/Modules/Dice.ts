import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Dice {
  minimum: number = 1;
  maximum: number;

  constructor(@Inject('face') face: number) {
    this.maximum = face;
  }

  LaunchDice(): number {
    return Math.floor(Math.random() * (this.maximum +1));
  }
}
