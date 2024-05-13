import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService, Item } from './api.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, LandingPageComponent],  // Asegúrate de incluir CommonModule y HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
