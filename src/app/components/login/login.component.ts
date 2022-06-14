import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';
import { ILogin } from 'src/model/interfaces/ILogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  
  loginForm!: FormGroup;
  subscription!:Subscription
  
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
    this.subscription = this.api.loginByEmail(form).subscribe((data) => {
      sessionStorage.setItem('Token', data.accessToken)
        this.router.navigate(['/'])
    },(error: HttpErrorResponse) => {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        alert(error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        alert(`Error ${error.status}: ` +
          ` ${error.error.message}`);
      }
    }
  )}

    
    
   
  ngOnDestroy(){
    if (this.subscription){
    this.subscription.unsubscribe()
    }
  }
  
}
