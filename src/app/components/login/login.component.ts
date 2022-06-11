import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';
import { ILogin } from 'src/model/interfaces/ILogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  
  loginForm!: FormGroup;
  unsus!:Subscription
  
  constructor(private formBuilder:FormBuilder,private api:ApiService,private router: Router) { }

  ngOnInit(): void {
    


    this.loginForm = this.formBuilder.group(
      {
        email:["", [Validators.required, Validators.email]],
        password:["", [Validators.required, Validators.minLength(5)]],
      }
    );
  }
  

  onLogin(form:ILogin){
    this.unsus = this.api.loginByEmail(form).subscribe((data) => {
      sessionStorage.setItem('Token', data.accessToken)
        this.router.navigate(['/'])
    })}

  getToken() {
    return sessionStorage.getItem('Token');
  }

  get isLoggedIn(): boolean {
    const authToken = this.getToken()
    return (authToken !== null) ? true : false;
    
  }

  ngOnDestroy(){
    this.unsus.unsubscribe()
  }
  
}
