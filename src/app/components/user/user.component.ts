import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/model/interfaces/IUsers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  @Input() user!:IUser

    

}
