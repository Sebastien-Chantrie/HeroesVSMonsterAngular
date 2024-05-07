import { Component, OnInit, HostListener } from '@angular/core';
import { PlateauService } from '../Services/plateau2-d.service';
import { Router } from '@angular/router';
import { Heros } from '../Modules/Heros';
import { FightDataService } from '../Services/fight-data.service';

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.css']
})
export class PlateauComponent implements OnInit {
  hero!: Heros;
  plateau: boolean[][];
  positionPion: { x: number, y: number } = { x: 0, y: 0 };

  constructor(
    private plateauService: PlateauService,
    private router: Router,
    private fightDataService: FightDataService
  ) {
    this.plateau = [];
  }

  ngOnInit(): void {
    this.plateau = this.plateauService.generatePlateauWithSpecialCases(10,25);
    if(this.fightDataService.positionPionBeforeFight)
    {
      this.positionPion = this.fightDataService.positionPionBeforeFight
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'z':
        this.deplacerPion(-1, 0);
        break;
      case 'q':
        this.deplacerPion(0, -1);
        break;
      case 's':
        this.deplacerPion(1, 0);
        break;
      case 'd':
        this.deplacerPion(0, 1);
        break;
    }
  }

  ControlePosition() {
    if (this.positionPion.x === 0 && this.positionPion.y === 9 ) {
      this.router.navigate(['/shop']);
      return;
    }

    if (this.plateau[this.positionPion.x][this.positionPion.y] === false) {
      this.fightDataService.positionPionBeforeFight = { ...this.positionPion };
      this.router.navigate(['/fight']);
      this.plateau = this.plateauService.generatePlateauWithSpecialCases(10,25);
    }
  }
  

  deplacerPion(dx: number, dy: number) {
    const nouvellePositionX = this.positionPion.x + dx;
    const nouvellePositionY = this.positionPion.y + dy;
    
    if (
      this.positionPion &&
      nouvellePositionX >= 0 && nouvellePositionX < this.plateau.length &&
      nouvellePositionY >= 0 && nouvellePositionY < this.plateau[0].length
    ) {
      this.positionPion.x = nouvellePositionX;
      this.positionPion.y = nouvellePositionY;
      this.ControlePosition();
    }
  }
}
