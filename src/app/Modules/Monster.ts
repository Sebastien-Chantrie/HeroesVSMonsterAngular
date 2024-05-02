import { Entity,Inventaire} from './Entity';

enum Type {
  Loup,
  Orc,
  Dragon
}

export class Monster extends Entity {
    monster: Type;

    constructor(monster: Type, inventaire: Inventaire) {
        super(inventaire);
        this.monster = monster;
        this.inventaire = this.GetInventaire();
    }

    GetForceBonus(): number {
        if (Type.Orc){
            this.forceBonus = 1;
        }
        return this.forceBonus;
    }
    
    GetEnduranceBonus(): number {
        if (Type.Dragon){
            this.enduranceBonus = 1;
        }
        return this.enduranceBonus;
    }

    GetInventaire(){
        switch (this.monster){
            case Type.Loup:
                this.inventaire.cuir = this.dice4.LaunchDice();
                this.inventaire.gold = 0;
                break;
            case Type.Orc:
                this.inventaire.cuir = 0;
                this.inventaire.gold = this.dice6.LaunchDice();
                break;
            case Type.Dragon:
                this.inventaire.cuir = this.dice4.LaunchDice();
                this.inventaire.gold = this.dice6.LaunchDice();
                break;
        }
        return this.inventaire;
    }
}

