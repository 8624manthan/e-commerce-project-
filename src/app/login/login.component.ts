import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userEmail: string ="";
  userPassword: string ="";
  router: any;

  constructor(private http: HttpClient )
  {
  }

  Login() {
    console.log(this.userEmail);
    console.log(this.userPassword);
 
    let bodyData = {
      userEmail: this.userEmail,
      userPassword: this.userPassword,
    };
 
        this.http.post("http://localhost:8181/api/user/login/user", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
 
        if (resultData.message == "Email not exits")
        {
      
          alert("Email not exits");
    
 
        }
        else if(resultData.message == "Login Success")
    
         {
          alert("Login Success");
          this.router.navigateByUrl('/home');
          
        }
        else
        {
          alert("Incorrect Email and Password not match");
        }
      });
    }
}

