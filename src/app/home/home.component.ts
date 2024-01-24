import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userUserName: string ="";
  userEmail: string ="";
  userPassword: string ="";
  route: any;

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


logout(){
  this.route.navigate(['/']);
}

}


