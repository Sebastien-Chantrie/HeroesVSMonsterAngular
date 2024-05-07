import { Entity,Inventaire} from './Entity';

export enum Type {
  Loup,
  Orc,
  Dragon
}

export class Monster extends Entity {
    monster: Type;
    type: string;

    constructor(monster: Type, inventaire: Inventaire) {
        super(inventaire);
        this.monster = monster;
        this.type = "undefined";
    }
}

