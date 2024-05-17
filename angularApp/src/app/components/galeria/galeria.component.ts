import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule,NgFor,NgIf],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent{
  photos: string[] = [
    'assets/galeria1.jpg',
    'assets/galeria9.jpg',
    'assets/galeria14.jpg',
    'assets/galeria4.jpg',
    'assets/galeria5.jpg',
    'assets/galeria6.jpg',
    'assets/galeria7.jpg',
    'assets/galeria8.jpg',
  ];

  selectedPhoto: number = -1; 

  openPhoto(index: number): void {
    this.selectedPhoto = index;
  }

  closePhoto(): void {
    this.selectedPhoto = -1;
  }
}




