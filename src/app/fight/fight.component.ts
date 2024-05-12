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
  img : string;

  constructor(
    private characterCreationService: CharacterCreationService,
    private monsterCreationService: MonsterCreationService,
    private router: Router,
    private fightDataService: FightDataService,
    
  ) {
    this.hero = this.characterCreationService.getHero();
    this.monster = this.monsterCreationService.getMonster();
    this.img = this.monsterCreationService.imagePath;
  }

  ngOnInit(): void {
  }

  heroAttack(): void {
    this.disableUserActions();
    this.hero.attack(this.monster);
    this.checkIfIsDead();
    if (this.monster.pointDeVieActuel > 0) {
      setTimeout(() => {
        this.monster.attack(this.hero);
        this.checkIfIsDead();
        this.enableUserActions();
      }, 1000);
    } else {
      this.createNextMonster();
      this.enableUserActions();
    }
  }

 disableUserActions() : void {
    const buttons = document.querySelectorAll('.action-button');
    buttons.forEach(button => {
      button.setAttribute('disabled', 'disabled');
    });
  }
  
enableUserActions() : void {
    const buttons = document.querySelectorAll('.action-button');
    buttons.forEach(button => {
      button.removeAttribute('disabled');
    });
  }

  calculateHealthBarWidthHero(): string {
    return ((this.hero.pointDeVieActuel / this.hero.pointDeVieMaximum) * 100) + '%';
  }
  calculateHealthBarWidthMonster(): string {
    return ((this.monster.pointDeVieActuel / this.monster.pointDeVieMaximum) * 100) + '%';
  }
    
  createNextMonster(): void {
    this.monster = this.monsterCreationService.CreateRandomMonster();
  }

  checkIfIsDead(): void {
    if (this.monster.pointDeVieActuel <= 0) {
      this.hero.xp += 5;
      this.levelUp();
      this.takeInventory();
      this.router.navigate(['/plateau']);
    } else if (this.hero.pointDeVieActuel <= 0) {
      this.createNextMonster();
      this.router.navigate(['/game-over']);
    }
  }

  levelUp(){
    if (this.hero.xp >= this.hero.nbXpForLevelUp) {
      this.hero.nbXpForLevelUp *= 2;
      this.hero.xp = 0;
      this.hero.level += 1;
      this.hero.endurance += 5;
      this.hero.force += 5;
    }
  }

  takeInventory(){
    this.hero.inventaire.cuir += this.monster.inventaire.cuir
    this.hero.inventaire.gold += this.monster.inventaire.gold
    console.log(this.hero.inventaire);
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
      this.checkIfIsDead();
    }
  }
}