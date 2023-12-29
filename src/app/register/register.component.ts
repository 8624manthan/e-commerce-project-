import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userUserName: string ="";
  userEmail: string ="";
  userPassword: string ="";

  constructor(private http: HttpClient )
  {
  }
  save()
  {
  
    let bodyData = {
      "userUserName" : this.userUserName,
      "userEmail" : this.userEmail,
      "userPassword" : this.userPassword
    };
    this.http.post("http://localhost:8181/api/user/save/user",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Successfully");
    });
  }
}

