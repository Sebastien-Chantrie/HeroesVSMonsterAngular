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

  RecupererInventaire(cible : Monster)
  {
      this.inventaire.cuir += cible.inventaire.cuir;
      this.inventaire.gold += cible.inventaire.gold;
      this.inventaire.potion += cible.inventaire.potion;
  }
  RegenLifePoint(){
    this.pointDeVieActuel = this.pointDeVieMaximum;
  }
}
