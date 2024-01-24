import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  adminEmail: string ="";
  adminPassword: string ="";
 


  constructor(private http: HttpClient ,private router:Router)
  {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  Login() {
    
    console.log(this.adminEmail);
    console.log(this.adminPassword);
 
    let bodyData = {
      adminEmail: this.adminEmail,
      adminPassword: this.adminPassword,
    };
 
      
        this.http.post("http://localhost:8181/api/admin/login/admin", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
    
        if (resultData.message == "Email not exits")
        {
      
          alert("Email not exits");
    
 
        }
        else if(resultData.message == "Login Success")
    
         {
          alert("Login Success");
          this.router.navigateByUrl('/admin-home');          
        }
        else
        {
          alert("Incorrect Email and Password not match");
        }
      });
    }
}

