import { Component, OnInit, HostListener} from '@angular/core';
import { PlateauService } from '../Services/plateau2-d.service';

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.css']
})

export class PlateauComponent implements OnInit {
  plateau: boolean[][];
  positionPion: { x: number, y: number } = { x: 0, y: 0 };

  constructor(private plateauService: PlateauService) {
    this.plateau = [];
  }

  ngOnInit(): void {
    this.plateau = this.plateauService.generatePlateauWithSpecialCases(10,25);
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

  ControlePosition(){
    if (this.positionPion.x === 0 && this.positionPion.y === 9 ){
      alert('Vous ouvrez la boutique');
      return;
    }
    if (this.plateau[this.positionPion.x][this.positionPion.y] === false) {

      alert('Combat');
      this.plateau = this.plateauService.generatePlateauWithSpecialCases(10,25);
    }
  }

  deplacerPion(dx: number, dy: number) {
    const nouvellePositionX = this.positionPion.x + dx;
    const nouvellePositionY = this.positionPion.y + dy;
    
    if (nouvellePositionX >= 0 && nouvellePositionX < this.plateau.length &&
        nouvellePositionY >= 0 && nouvellePositionY < this.plateau[0].length) {
      this.positionPion.x = nouvellePositionX;
      this.positionPion.y = nouvellePositionY;
      this.ControlePosition();
    }
  }
}


