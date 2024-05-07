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
    const inventaire = { cuir: 0, gold: 0, potion :0};

    let hero: Heros 
    if (race === Race.Humain) {
      hero = new Heros(Race.Humain, inventaire);
      hero.enduranceBonus = 1;
      hero.forceBonus = 1;
      hero.inventaire.potion = 5;
    } else if (race === Race.Nain) {
      hero = new Heros(Race.Nain, inventaire);
      hero.enduranceBonus = 2;
      hero.forceBonus = 0;
    }
    else {
      throw new Error("Race non reconnue");
    }
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
