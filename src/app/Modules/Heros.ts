import { Entity, Inventaire } from './Entity';
import { Monster } from './Monster';

export enum Race {
  Humain,
  Nain
}

export class Heros extends Entity {
    race: Race;

    constructor(hero : Race, inventaire : Inventaire){
        super(inventaire)
        this.race = hero;
    }

  override GetForceBonus(): number {
    if (this.race === Race.Humain) {
      this.forceBonus = 1;
    }
    return this.forceBonus;
  }

  override GetEnduranceBonus(): number {
    if (this.race === Race.Humain) {
      this.enduranceBonus = 1;
    } else if (this.race === Race.Nain) {
      this.enduranceBonus = 2;
    }
    return this.enduranceBonus;
  }

  RecupererInventaire(cible : Monster)
  {
      this.inventaire.cuir += cible.inventaire.cuir;
      this.inventaire.gold += cible.inventaire.gold;
  }
  RegenLifePoint(){
    this.pointDeVieActuel = this.pointDeVieMaximum;
  }
}
