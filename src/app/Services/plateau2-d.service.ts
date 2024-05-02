import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PlateauService {
  constructor() { }

  generatePlateauWithSpecialCases(size: number, specialCasesCount: number): boolean[][] {
    const plateau: boolean[][] = Array.from({ length: size }, () => Array(size).fill(null));
    const specialCases: { x: number, y: number }[] = [];

    while (specialCases.length < specialCasesCount) { 
      let x = Math.floor(Math.random() * size);
      let y = Math.floor(Math.random() * size);
      if (!specialCases.some((caseCoord) => caseCoord.x === x && caseCoord.y === y)) {
        if (x === 0 && y !== size - 1) {
          x = Math.floor(Math.random() * size);
          y = Math.floor(Math.random() * size);
        }
        specialCases.push({ x, y })
      }
    specialCases.forEach((caseCoord) => {
      plateau[caseCoord.x][caseCoord.y] = false;
    });
    }
  return plateau;
  }
}