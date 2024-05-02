import { Injectable } from '@angular/core';
import { Dice } from './Dice';


Injectable({
  providedIn: 'root'
})

export interface Inventaire {
    cuir: number;
    gold: number;
}

export abstract class Entity {
  endurance: number;
  enduranceBonus: number;
  force: number;
  forceBonus: number;
  pointDeVieMaximum: number;
  pointDeVieActuel: number;
  dice4: Dice;
  dice6: Dice;
  inventaire : Inventaire;

  constructor(inventaire: Inventaire) {
    this.endurance = this.CaculStats();
    this.force = this.CaculStats();
    this.enduranceBonus = this.GetEnduranceBonus();
    this.forceBonus = this.GetForceBonus();
    this.pointDeVieMaximum = this.CalculLifePoint();
    this.pointDeVieActuel = this.pointDeVieMaximum;
    this.dice4 = new Dice(4);
    this.dice6 = new Dice(6);
    this.inventaire = inventaire;
  }
    abstract GetForceBonus() : number;
    abstract GetEnduranceBonus() : number;

    CalculLifePoint(): number{
        return this.Modificator(this.endurance + this.enduranceBonus);
    }

    CaculStats(): number {
        let tabResult: number[] = new Array(4);
        let stats: number = 0;
        for(let i: number = 0; i < tabResult.length; i++){
            tabResult[i] = this.dice6.LaunchDice();
        }
        tabResult.sort()
        for(let i: number = 1; i < tabResult.length; i++){
            stats += tabResult[i];
        }
        return stats;
    }

    attack(cible : Entity) {
        cible.pointDeVieActuel - this.dice4.LaunchDice() + this.Modificator(this.force);
    }

    Modificator(stats:number) : number {
    if (stats < 5) {
        return -1;
    } else if (stats < 10) {
        return 0;
    } else if (stats < 15) {
        return 1;
    } else {
        return 2;
    }
  }
}
