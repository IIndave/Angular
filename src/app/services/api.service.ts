import { Injectable } from '@angular/core';
import { ILogin } from 'src/model/interfaces/ILogin';
import { IRegister } from 'src/model/interfaces/IRegister';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserResponse } from 'src/model/interfaces/IUser';

const url:string="http://51.38.51.187:5050/api/v1/";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http:HttpClient) {
    
  }
    loginByEmail(form:ILogin):Observable<IRegister>{
      const direccion2 = url + "auth/log-in";

      return this.http.post<IRegister>(direccion2,form)
    }

    getUsers(){
      const address = url + "users";
      const token = sessionStorage.getItem('Token');
      const headers:HttpHeaders = new HttpHeaders().append('Authorization','Bearer ' + token)
      
      return this.http.get<IUserResponse>(address,
      {
        headers:headers,
      })
      }


    

   
}
