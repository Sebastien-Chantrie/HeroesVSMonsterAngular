import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterCreationService } from '../Services/character-creation.service';
import { Heros } from '../Modules/Heros';
import { Monster } from '../Modules/Monster';
import { MonsterCreationService } from '../Services/monster-creation.service';
import { FightDataService } from '../Services/fight-data.service';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {
  hero: Heros;
  monster: Monster;

  constructor(
    private characterCreationService: CharacterCreationService,
    private monsterCreationService: MonsterCreationService,
    private router: Router,
    private fightDataService: FightDataService,
  ) {
    this.hero = this.characterCreationService.getHero();
    this.monster = this.monsterCreationService.getMonster();
  }

  ngOnInit(): void {
  }

  heroAttack(): void {
    this.hero.attack(this.monster);
    console.log(`${this.hero} attaque ${this.monster}, PV DU MONSTRE : ${this.monster.pointDeVieActuel}`);
    this.checkHealth();
  }

  createNextMonster(): void {
    this.monster = this.monsterCreationService.CreateRandomMonster();
  }

  checkHealth(): void {
    if (this.monster.pointDeVieActuel <= 0) {
      this.createNextMonster();
      this.router.navigate(['/plateau']);
    } else if (this.hero.pointDeVieActuel <= 0) {
      this.router.navigate(['/game-over']);
    }
  }
  

  healPotion(cible : Heros) {
    // WIP
  }

  tryToLeave() {
    // WIP
  }
}
