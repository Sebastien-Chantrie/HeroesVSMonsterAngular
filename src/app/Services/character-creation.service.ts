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
      hero.force += 15;
      hero.inventaire.potionvie = 2;
      hero.classe = "humain"
    } else if (race === Race.Nain) {
      hero = new Heros(Race.Nain, inventaire);
      hero.pointDeVieActuel += 50;
      hero.pointDeVieMaximum += 50;
      hero.force = 50000;
      hero.inventaire.potionvie = 200;
      hero.classe = "nain"
    } else if (race === Race.Mage){
      hero = new Heros(Race.Nain, inventaire);
      hero.pointDeVieActuel += 50;
      hero.pointDeVieMaximum += 50;
      hero.inventaire.potionvie = 200;
      hero.intel = 30;
      hero.manaMaximum = 200;
      hero.mana = hero.manaMaximum
      hero.classe = "mage"
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
