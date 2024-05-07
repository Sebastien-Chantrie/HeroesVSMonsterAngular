
import { Dice } from './Dice';


export interface Inventaire {
    cuir: number;
    gold: number;
    potion: number;
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
    this.dice4 = new Dice(4);
    this.dice6 = new Dice(6);
    this.endurance = this.CaculStats();
    this.force = this.CaculStats();
    this.enduranceBonus = 0;
    this.forceBonus = 0;
    this.pointDeVieMaximum = this.CalculLifePoint();
    this.pointDeVieActuel = this.pointDeVieMaximum;
    this.inventaire = inventaire;
  }


    CalculLifePoint(): number{
        return this.Modificator(this.endurance);
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
        let damage : number = cible.pointDeVieActuel - this.dice4.LaunchDice() + this.Modificator(this.force);
        cible.pointDeVieActuel -= damage;
    }

    Modificator(stats:number) : number {
    if (stats < 5) {
        return stats - 1;
    } else if (stats < 10) {
        return stats;
    } else if (stats < 15) {
        return stats +1;
    } else {
        return stats +2;
    }
  }
}
