import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private readonly _formBuilder = inject(FormBuilder);

  formGroup = this._formBuilder?.nonNullable.group({
       email: ["", Validators.required],
    password: ["", Validators.required],

  })


  clickLogin(): void {
    if(this.formGroup.valid){

    const email = this.formGroup.controls.email.value;
    const password = this.formGroup.controls.password.value;
   
    const data = {data: {
      "email": email,
      "password": password
    }
  };

    console.log(data.data);
      }
  }
}
