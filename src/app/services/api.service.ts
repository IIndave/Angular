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
      let direccion2 = url + "auth/log-in";

      return this.http.post<IRegister>(direccion2,form)
    }


    

   
}
