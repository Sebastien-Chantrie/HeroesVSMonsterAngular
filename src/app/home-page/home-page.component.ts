import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterCreationService } from '../Services/character-creation.service';
import { Race } from '../Modules/Heros';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private router: Router, private characterCreationService: CharacterCreationService) {}

  choisirRace(race: Race) {
    const hero = this.characterCreationService.createHero(race);

    // Enregistrez le héros dans le service de création de personnage pour pouvoir y accéder dans d'autres composants si nécessaire
    this.characterCreationService.setHero(hero);
    console.log(this.characterCreationService.getHero())

    // Naviguez vers la page du plateau de jeu
    this.router.navigate(['/plateau']);
  }
}