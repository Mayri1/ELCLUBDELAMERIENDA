import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule,NavigationComponent, RouterLink]  // Importa ReactiveFormsModule aquí
})
export class LoginFormComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient) {}


  ngOnInit() {}

  onSubmit() {
    if (this.userForm.valid) {
      // Mapea los campos del formulario a los nombres esperados por el backend
      const formData = {
        email: this.userForm.value.email,
        password: this.userForm.value.password
      };

      this.http.post('http://localhost:8000/api/login/', formData)
        .subscribe({
          next: (response) => console.log('User successfully login!', response),
          error: (error) => console.log('Error occurred while login user:', error)
        });
    }
  }
}
