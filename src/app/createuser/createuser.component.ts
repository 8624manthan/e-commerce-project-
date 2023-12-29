import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit{

  user:User=new User();

  constructor(private userService:UserService, private router:Router){}
  ngOnInit(): void {
      
  }
  saveUser(){
      this.userService.createUser(this.user).subscribe(data =>{
      console.log(data);
      this.goToUserList();
    },
    error =>console.log(error));
  }

  goToUserList()
  {
    this.router.navigate(['/get-user'])
  }

    onSubmit()
    {
      this.saveUser();
      console.log(this.user);
      
    }
}
