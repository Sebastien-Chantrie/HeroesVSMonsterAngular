import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterCreationService } from '../Services/character-creation.service';
import { Heros } from '../Modules/Heros';
import { Monster } from '../Modules/Monster';
import { MonsterCreationService } from '../Services/monster-creation.service';
import { FightDataService } from '../Services/fight-data.service';

@Component({
  selector: 'app-fight',
  template:'',
  styleUrls:[],
})
export class fight {
  hero: Heros;
  monster: Monster;
  img : string;

  constructor(
    public characterCreationService: CharacterCreationService,
    public monsterCreationService: MonsterCreationService,
    public router: Router,
    public fightDataService: FightDataService,
    
  ) {
    this.hero = this.characterCreationService.getHero();
    this.monster = this.monsterCreationService.getMonster();
    this.img = this.monsterCreationService.imagePath;
  }

  calculateHealthBarWidthHero(): string {
    return ((this.hero.pointDeVieActuel / this.hero.pointDeVieMaximum) * 100) + '%';
  }
  calculateManaBarWidthHero() : string {
    return ((this.hero.mana / this.hero.manaMaximum) * 100) + '%';
  }
  calculateHealthBarWidthMonster(): string {
    return ((this.monster.pointDeVieActuel / this.monster.pointDeVieMaximum) * 100) + '%'; 
  }

  onHeroAttack(typeattack: string): void {
    this.fightDataService.heroAttack(typeattack);
  }

  onHealPotion(): void {
    this.fightDataService.healPotion();
  }

  onManaPotion() : void {
    this.fightDataService.manaPotion();
  }
}

@Component({
  selector: 'app-fight',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.css']
})
export class ForestComponent extends fight {
  constructor(
    public override characterCreationService: CharacterCreationService,
    public override monsterCreationService: MonsterCreationService,
    public override router: Router,
    public override fightDataService: FightDataService,
  ) {
    super(
      characterCreationService,
      monsterCreationService,
      router,
      fightDataService
    );
    fightDataService.onMonsterDead = () =>{
      this.fightDataService.monster = this.monsterCreationService.CreateRandomMonster();
      this.router.navigate(['/plateau']);
    } 
  }
 
  onTryToLeave(): void {
    this.fightDataService.tryToLeave();
  }
}