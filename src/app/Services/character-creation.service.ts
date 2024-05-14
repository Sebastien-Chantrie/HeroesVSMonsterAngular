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
      hero.force += 15;
      hero.inventaire.potion = 2;
    } else if (race === Race.Nain) {
      hero = new Heros(Race.Nain, inventaire);
      hero.pointDeVieActuel += 50;
      hero.pointDeVieMaximum += 50;
      hero.inventaire.potion = 200;
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
