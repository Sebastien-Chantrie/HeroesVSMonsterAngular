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
    this.monster.attack(this.hero);
    console.log(`${this.hero} attaque ${this.monster}, PV DU MONSTRE : ${this.monster.pointDeVieActuel}`);
    console.log(`${this.monster} attaque ${this.hero}, PV DU HEROS : ${this.hero.pointDeVieActuel}`);
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
      this.createNextMonster();
      this.router.navigate(['/game-over']);
    }
  }
  

  healPotion() {
    if ( this.hero.inventaire.potion != 0){
      this.hero.pointDeVieActuel = this.hero.pointDeVieMaximum;
    }
    else { alert("vous n'avez pas de potion")}
  }

  tryToLeave() {
    let randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber)
    if (randomNumber == 3){
      this.createNextMonster();
      this.router.navigate(['/plateau']);
    }
    else {
      alert("Vous n'avez pas réussi a vous enfuir")
      this.monster.attack(this.hero);
      this.checkHealth();
    }
  }
}
