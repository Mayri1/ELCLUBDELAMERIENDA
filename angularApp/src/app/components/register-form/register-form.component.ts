import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]  // Importa ReactiveFormsModule aquí
})
export class RegisterFormComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]), 
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    if (this.userForm.valid) {
      // Mapea los campos del formulario a los nombres esperados por el backend
      const formData = {
        username: this.userForm.value.userName,
        first_name: this.userForm.value.firstName,
        last_name: this.userForm.value.lastName,
        email: this.userForm.value.email,
        password: this.userForm.value.password
      };

      this.http.post('http://localhost:8000/api/register/', formData)
        .subscribe({
          next: (response) => console.log('User registered successfully!', response),
          error: (error) => console.log('Error occurred while registering user:', error)
        });
    }
  }
}
