import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRegister } from 'src/model/interfaces/IRegister';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;//las propiedades de todos los campos
  submitted = false;//propiedad submitted para hacer un control de si se ha pulsado o no el botón de enviar, para gestionar esta información.

  constructor(private formBuilder:FormBuilder,private api:ApiService,private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name:["", Validators.required],
        surname:["", Validators.required],
        email:["", [Validators.required, Validators.email]],
        password:["", [Validators.required, Validators.minLength(5)]],
      },
    );
  }
  // getter acceso a los campos del form
  get form() {
    return this.registerForm.controls;
  }

  register(form:IRegister){
    console.log(form)
    this.api.register(form).subscribe({
      next: () => {
          this.router.navigate(['/login'])
      },
      error: error => {
        alert(`Error ${error.status}: ` +
        ` ${error.error.message}`);
      }
  })}

}
