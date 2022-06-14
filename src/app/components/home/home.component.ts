import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { IUser } from 'src/model/interfaces/IUsers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarios:IUser[] = [];
  constructor(private api:ApiService,private router:Router) {
   }
   
   

  ngOnInit(): void {
    this.api.getUsers().pipe(take(1)).subscribe(data => {//Mirar lo del take 
      this.usuarios = data.items;
      console.log(this.usuarios)
    })
    }

    logout(){
      sessionStorage.setItem('Token','')
      this.router.navigate(['/login'])
    }
  }
      

