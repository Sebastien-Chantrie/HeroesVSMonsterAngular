import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterCreationService } from '../Services/character-creation.service';
import { Heros } from '../Modules/Heros';
import { Monster } from '../Modules/Monster';
import { MonsterCreationService } from '../Services/monster-creation.service';

@Injectable({
  providedIn: 'root'
})
export class FightDataService {
  positionPionBeforeFight!: { x: number, y: number };
  positionPionWhenRetry : {x: number, y: number} = {x : 0, y : 0}
  hero: Heros;
  monster: Monster;
  img : string;
  onMonsterDead: () => void = () => {}

  constructor(
    private characterCreationService: CharacterCreationService,
    private monsterCreationService: MonsterCreationService,
    private router: Router,
  ) {
    this.hero = this.characterCreationService.getHero();
    this.monster = this.monsterCreationService.getMonster();
    this.img = this.monsterCreationService.imagePath;
   }

   heroLaunchSpell(): void {

   }

  heroAttack(attacktype : string): void {
    this.disableUserActions();
    if (attacktype == "atk") this.hero.attack(this.monster);
    if (attacktype == "spell"){
      console.log(this.hero.mana)
      if (this.hero.mana >= 50){
        this.hero.spell(this.monster);
        this.hero.mana = this.hero.mana - 50
      }
      else {
        this.enableUserActions();
        return;
      }
    }
    this.checkIfIsDead();
    if (this.monster.pointDeVieActuel > 0) {
      setTimeout(() => {
        if (this.monster.pointDeVieActuel === this.monster.pointDeVieMaximum){
          this.enableUserActions();
          return;
        }
        this.monster.attack(this.hero)
        this.checkIfIsDead();
        this.enableUserActions();
      }, 1000);
    }else {
      this.createNextMonster();
      this.enableUserActions();
      return;
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

    
  createNextMonster(): void {
    this.monster = this.monsterCreationService.CreateRandomMonster();
  }

  checkIfIsDead(): void {
    if (this.monster.pointDeVieActuel <= 0) {
      this.hero.xp += 5;
      this.levelUp();
      this.takeInventory();
      this.onMonsterDead();
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
      this.hero.pointDeVieMaximum*2;
      this.hero.pointDeVieActuel*2;
      this.hero.force*2;
    }
  }

  takeInventory(){
    this.hero.inventaire.cuir += this.monster.inventaire.cuir
    this.hero.inventaire.gold += this.monster.inventaire.gold
    console.log(this.hero.inventaire);
  }
  
  healPotion() {
    if ( this.hero.inventaire.potionvie != 0){
      this.hero.pointDeVieActuel = this.hero.pointDeVieMaximum;
      this.hero.inventaire.potionvie--;
    }
  }

  manaPotion(){
    if ( this.hero.inventaire.potionmana != 0){
      this.hero.mana = this.hero.manaMaximum
      this.hero.inventaire.potionmana--;
    }
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

