import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.css']
})
export class CreateadminComponent implements OnInit{

  admin:Admin=new Admin();

  constructor(private adminService:AdminService,
     private router:Router){}
  ngOnInit(): void {
      
  }
  saveAdmin(){
    this.adminService.createAdmin(this.admin).subscribe(data=>{
      console.log(data);
      this.goToAdminList();
    })
  }

  goToAdminList()
  {
    // this.router.navigate(['/get-admin'])
    this.router.navigate(['/home']);
  }

    onSubmit()
    {
      this.saveAdmin();
    }
}
