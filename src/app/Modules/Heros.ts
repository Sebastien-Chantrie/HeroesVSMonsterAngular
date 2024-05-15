import { Entity, Inventaire } from './Entity';
import { Monster } from './Monster';

export enum Race {
  Humain,
  Nain,
  Mage
}

export class Heros extends Entity {
    race: Race;
    xp : number;
    nbXpForLevelUp : number;
    level : number;
    intel : number;
    intelbonus : number;
    mana : number;
    manaMaximum : number;
    classe: string | undefined;

    constructor(hero : Race, inventaire : Inventaire){
        super(inventaire)
        this.race = hero;
        this.xp = 0;
        this.level = 1;
        this.nbXpForLevelUp = 10;
        this.intel = 0;
        this.intelbonus = 0;
        this.mana = 0;
        this.manaMaximum = 0;
    }

    spell(cible : Entity) {
      let damage : number = this.dice4.LaunchDice() + this.Modificator(this.intel + this.intelbonus)
      cible.pointDeVieActuel -= damage;
    }
}