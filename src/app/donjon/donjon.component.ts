import { Component } from '@angular/core';
import { FightDataService } from '../Services/fight-data.service';
import { ForestComponent,fight } from '../forest/forest.component';
import { MonsterCreationService } from '../Services/monster-creation.service';
import { CharacterCreationService } from '../Services/character-creation.service';
import { Router } from '@angular/router';
import { Monster } from '../Modules/Monster';

interface DonjonState {
  backgroundImage: string;
  monsterImage: string;
  monster: Monster;
}

class DonjonStateRoom1 implements DonjonState {
  backgroundImage = '../../assets/bgdonjon.jpg';
  monsterImage = '../../assets/spider.png'
  monster = new Monster({
    cuir : 0,
    gold : 0,
    potionvie : 0,
    potionmana: 0
  });
  constructor(){
    this.monster.pointDeVieActuel = 100;
    this.monster.pointDeVieMaximum = 100;
    this.monster.force = 25;
  }
}

class DonjonStateRoom2 implements DonjonState {
  backgroundImage = '../../assets/bgdonjon2.jpg';
  monsterImage = '../../assets/zombear.png'
  monster = new Monster({
    cuir : 0,
    gold : 0,
    potionvie : 0,
    potionmana: 0
  });
  constructor(){
    this.monster.pointDeVieActuel = 150;
    this.monster.pointDeVieMaximum = 150;
    this.monster.force = 25;
  }
}

class DonjonStateRoom3 implements DonjonState {
  backgroundImage = '../../assets/bgdonjon3.jpg';
  monsterImage = '../../assets/vampire.png'
  monster = new Monster({
    cuir : 0,
    gold : 0,
    potionvie : 0,
    potionmana: 0
  });
  constructor(){
    this.monster.pointDeVieActuel = 200;
    this.monster.pointDeVieMaximum = 200;
    this.monster.force = 35;
  }
}

class DonjonStateRoom4 implements DonjonState {
  backgroundImage = '../../assets/bgdonjon4.png';
  monsterImage = '../../assets/babydragon.png'
  monster = new Monster({
    cuir : 0,
    gold : 0,
    potionvie : 0,
    potionmana: 0
  });
  constructor(){
    this.monster.pointDeVieActuel = 300;
    this.monster.pointDeVieMaximum = 300;
    this.monster.force = 30;
  }
}

class DonjonStateRoom5 implements DonjonState {
  backgroundImage = '../../assets/bgdonjon5.png';
  monsterImage = '../../assets/boss.png'
  monster = new Monster({
    cuir : 0,
    gold : 0,
    potionvie : 0,
    potionmana: 0
  });
  constructor(){
    this.monster.pointDeVieActuel = 500;
    this.monster.pointDeVieMaximum = 500;
    this.monster.force = 30;
  }
}

@Component({
  selector: 'app-donjon',
  templateUrl: './donjon.component.html',
  styleUrl: './donjon.component.css'
})
export class DonjonComponent extends fight {
  currentState: DonjonState;
  monsterImage: string;
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
    this.monsterImage = "";
    this.currentState = new DonjonStateRoom1();
    this.changeState(new DonjonStateRoom1());
    fightDataService.onMonsterDead = this.changeInstance.bind(this);
  }

   changeState(newState: DonjonState): void {
    this.currentState = newState; 
    this.monsterImage = newState.monsterImage;
    this.monster = newState.monster;
    this.img = newState.monsterImage;
    this.fightDataService.monster = this.monster;
  }

  changeInstance(): void {
    if (this.currentState instanceof DonjonStateRoom1) {
      this.changeState(new DonjonStateRoom2());
    } else if (this.currentState instanceof DonjonStateRoom2) {
      this.changeState(new DonjonStateRoom3());
    } else if (this.currentState instanceof DonjonStateRoom3) {
      this.changeState(new DonjonStateRoom4());
    } else if (this.currentState instanceof DonjonStateRoom4) {
      this.changeState(new DonjonStateRoom5());
    }
    else if (this.currentState instanceof DonjonStateRoom5) {
      this.router.navigate(['/win'])
    }
  }
}