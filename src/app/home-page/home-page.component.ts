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
    this.characterCreationService.setHero(hero);
    console.log(this.characterCreationService.getHero())
    this.router.navigate(['/plateau']);
  }
}