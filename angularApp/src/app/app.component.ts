import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HttpClientModule, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // Cualquier inicialización necesaria
  }

  registerUser() {
    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.apiService.registerUser(userData).subscribe(
      data => {
        console.log('Registro exitoso', data);
      },
      error => {
        console.error('Error en el registro', error);
      }
    );
  }
}
