import { Injectable } from '@angular/core';
import { Heros, Race } from '../Modules/Heros';

@Injectable({
  providedIn: 'root'
})
export class CharacterCreationService {
  private hero?: Heros
  constructor() {
  }

  createHero(race: Race): Heros {
    const inventaire = { cuir: 0, gold: 0, potionvie: 0, potionmana: 0};

    let hero: Heros 
    if (race === Race.Humain) {
      hero = new Heros(Race.Humain, inventaire);
      hero.force = 20;
      hero.inventaire.potionvie = 5;
      hero.classe = "humain"
    } else if (race === Race.Nain) {
      hero = new Heros(Race.Nain, inventaire);
      hero.pointDeVieActuel += 50;
      hero.pointDeVieMaximum += 50;
      hero.inventaire.potionvie = 5;
      hero.force = 10;
      hero.classe = "nain"
    } else if (race === Race.Mage){
      hero = new Heros(Race.Mage, inventaire);
      hero.pointDeVieActuel += 50;
      hero.pointDeVieMaximum += 50;
      hero.inventaire.potionvie = 5;
      hero.inventaire.potionmana = 5;
      hero.intel = 30;
      hero.manaMaximum = 200;
      hero.mana = hero.manaMaximum;
      hero.classe = "mage";
      hero.force = 5;
    }
    else {
      throw new Error("Race non reconnue");
    }
    console.log(hero.pointDeVieActuel);
    return hero;
  }

  setHero(hero: Heros): void {
    this.hero = hero;
  }

  getHero(): Heros {
    if  (this.hero != undefined) return this.hero;
    else {
      throw new Error("Heros indisponible");
    }
  }
}
