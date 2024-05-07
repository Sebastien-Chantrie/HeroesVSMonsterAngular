import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FightDataService {
  positionPionBeforeFight!: { x: number, y: number };
  positionPionWhenRetry : {x: number, y: number} = {x : 0, y : 0}
  constructor() { }
}

