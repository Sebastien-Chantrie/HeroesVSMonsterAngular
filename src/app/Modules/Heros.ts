import { Entity, Inventaire } from './Entity';
import { Monster } from './Monster';

export enum Race {
  Humain,
  Nain
}

export class Heros extends Entity {
    race: Race;
    xp : number;
    nbXpForLevelUp : number;
    level : number;

    constructor(hero : Race, inventaire : Inventaire){
        super(inventaire)
        this.race = hero;
        this.xp = 0;
        this.level = 1;
        this.nbXpForLevelUp = 10;
    }
}