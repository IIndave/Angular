import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUserResponse } from 'src/model/interfaces/IUser';
import { IUsers } from 'src/model/interfaces/IUsers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarios!:IUsers[];
  constructor(private http:HttpClient) {
    this.usuarios = [];
   }

  ngOnInit(): void {
    let headers:HttpHeaders = new HttpHeaders()
    const token = sessionStorage.getItem('Token');

    headers = headers.append('Authorization','Bearer ' + token)

    this.http.get<IUserResponse>('http://51.38.51.187:5050/api/v1/users',
    {
      headers:headers,
    }).subscribe(data => {
      this.usuarios = data.items;
      console.log(this.usuarios)
    })
    }
    
    
  

  
}
