import { Injectable } from '@angular/core';
import { Monster, Type } from '../Modules/Monster';
import { Dice } from '../Modules/Dice';

@Injectable({
  providedIn: 'root'
})
export class MonsterCreationService {
  private monster: Monster;
  dice4 = new Dice(4);
  dice6 = new Dice(6);
  type: string;

  constructor() {
    this.monster = this.CreateRandomMonster();
    this.type = "undefined";
  }

  CreateRandomMonster() {
    let monster: Monster;
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      monster = this.createMonster(Type.Dragon);
    } else if (randomNumber === 1) {
      monster = this.createMonster(Type.Loup);
    } else {
      monster = this.createMonster(Type.Orc);
    }
    return monster;
  }

  createMonster(type: Type): Monster {
    const inventaire = { cuir: 0, gold: 0, potion: 0 };

    if (type === Type.Dragon) {
      this.monster = new Monster(Type.Dragon, inventaire);
      this.monster.enduranceBonus = 1;
      this.monster.inventaire.cuir = this.dice4.LaunchDice();
      this.monster.inventaire.gold = this.dice6.LaunchDice();
      this.monster.inventaire.potion = 0;
      this.monster.forceBonus = 0;
      this.monster.type = "Dragon";
    } else if (type === Type.Loup) {
      this.monster = new Monster(Type.Loup, inventaire);
      this.monster.enduranceBonus = 0;
      this.monster.inventaire.cuir = this.dice4.LaunchDice();
      this.monster.inventaire.gold = 0;
      this.monster.inventaire.potion = 0;
      this.monster.forceBonus = 0;
      this.monster.type = "Loup";
    } else if (type === Type.Orc) {
      this.monster = new Monster(Type.Orc, inventaire);
      this.monster.enduranceBonus = 0;
      this.monster.forceBonus = 1;
      this.monster.inventaire.cuir = this.dice4.LaunchDice();
      this.monster.inventaire.gold = 0;
      this.monster.inventaire.potion = 0;
      this.monster.type = "Orc";
    }
    return this.monster;
  }

  setMonster(monster: Monster): void {
    this.monster = monster;
  }

  getMonster(): Monster {
    if (this.monster != undefined) {
      return this.monster;
    } else {
      throw new Error("Erreur lors de la création du monstre");
    }
  }
}
