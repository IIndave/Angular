
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isLogged() {
    return sessionStorage.getItem('Token')
  }
  
}
