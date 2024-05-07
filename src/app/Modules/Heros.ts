import { Entity, Inventaire } from './Entity';
import { Monster } from './Monster';

export enum Race {
  Humain,
  Nain
}

export class Heros extends Entity {
    race: Race;
    position: { x: number, y: number };

    constructor(hero : Race, inventaire : Inventaire){
        super(inventaire)
        this.race = hero;
        this.position = { x: 0, y: 0 };
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
