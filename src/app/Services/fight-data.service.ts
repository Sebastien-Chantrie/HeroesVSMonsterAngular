import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FightDataService {
  positionPionBeforeFight!: { x: number, y: number };
  constructor() { }
}

