import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService, Item } from './api.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuienesSomosComponent } from "./quienes-somos/quienes-somos.component";
@Component({
    selector: 'app-root',
    standalone: true, // Asegúrate de incluir CommonModule y HttpClientModule
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, HttpClientModule, LandingPageComponent, QuienesSomosComponent]
})
export class AppComponent implements OnInit {
  items: Item[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getItems().subscribe((data: Item[]) => {
      this.items = data;
    }, error => {
      console.error('Error fetching items', error); // Log de errores
    });
  }
}
