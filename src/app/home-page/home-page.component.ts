import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterCreationService } from '../Services/character-creation.service';
import { Heros, Race } from '../Modules/Heros';
import { Dice } from '../Modules/Dice'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private router: Router, private characterCreationService: CharacterCreationService) {}

  choisirRace() {
    this.router.navigate(['/plateau']);
  }
}
