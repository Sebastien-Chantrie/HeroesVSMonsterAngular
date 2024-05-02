import { Injectable } from '@angular/core';
import { Heros, Race } from '../Modules/Heros';
import { Dice } from '../Modules/Dice';

@Injectable({
  providedIn: 'root'
})
export class CharacterCreationService {
  constructor() {
  }

  createCharacter() {
    const inventaire = {
      cuir: 0,
      gold: 0
    };
  }
}
