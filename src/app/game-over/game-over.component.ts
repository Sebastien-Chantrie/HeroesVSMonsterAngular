import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FightDataService } from '../Services/fight-data.service';


@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrl: './game-over.component.css'
})
export class GameOverComponent {
  constructor(
  private router: Router,
  private fightDataService : FightDataService
  ){}
  
  restartGame(){
    this.fightDataService.positionPionBeforeFight.x = 0;
    this.fightDataService.positionPionBeforeFight.y = 0;
    this.router.navigate(['']);
  }
}
