import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;//las propiedades de todos los campos
  submitted = false;//propiedad submitted para hacer un control de si se ha pulsado o no el botón de enviar, para gestionar esta información.

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name:["", Validators.required],
        surname:["", Validators.required],
        email:["", [Validators.required, Validators.email]],
        password:["", [Validators.required, Validators.minLength(5)]],
      },//FormBuilder, que será la encargada de construir agrupando un formulario con sus datos por defecto, si son obligatorios, validaciones y otras opciones
    );
  }
  // convenience getter for easy access to form fields
  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert(
      ` ${this.registerForm.value.name} ${this.registerForm.value.surname} te has registrado correctamente`
    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
