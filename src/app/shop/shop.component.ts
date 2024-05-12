import { Component } from '@angular/core';
import { CharacterCreationService } from '../Services/character-creation.service';
import { Heros } from '../Modules/Heros';
import { Router } from '@angular/router';
import { FightDataService } from '../Services/fight-data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  hero: Heros;

  constructor(private characterCreationService: CharacterCreationService,
    private router: Router,
    private fightDataService: FightDataService) 
    {this.hero = this.characterCreationService.getHero();}

    sellLeather(){
      if ( this.hero.inventaire.cuir > 0) {
        this.hero.inventaire.cuir -= 1;
        this.hero.inventaire.gold += 5;
      }
    }

    buyHealPot(){
      if ( this.hero.inventaire.gold >= 10) {
        this.hero.inventaire.potion += 1
        this.hero.inventaire.gold -= 10;
      }
      else {
        alert("Tu n'a pas assez d'argent.")
      }
    } 

  returnPlateau(){
    this.router.navigate(['/plateau']);
  }
}
