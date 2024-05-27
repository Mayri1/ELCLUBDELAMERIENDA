import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  private readonly _formBuilder = inject(FormBuilder);

  formGroup = this._formBuilder.nonNullable.group({
    firstName:["", Validators.required],
    lastName: ["", Validators.required],
    userName: ["", Validators.required],
    email: ["", Validators.required, Validators.email],
    password: ["", Validators.required],

  })


  // formGroup = new FormGroup({
  //   firstName: new FormControl("", [Validators.required]),
  //   lastName: new FormControl("", [Validators.required, Validators.minLength(4)]),
  //   userName: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
  //   email: new FormControl("", [Validators.required, Validators.email]),
  //   password: new FormControl("", [Validators.required]),
  //   isAgree: new FormControl(false)
  // })

  clickRegister(): void {
    const firstName = this.formGroup.controls.firstName.value;
    console.log(firstName);
    
  }
}
