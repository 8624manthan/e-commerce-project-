import { Component, OnInit } from '@angular/core';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createseller',
  templateUrl: './createseller.component.html',
  styleUrls: ['./createseller.component.css']
})
export class CreatesellerComponent implements OnInit{

  seller:Seller =new Seller();

  constructor(private sellerService:SellerService,
    private router:Router){}

  ngOnInit(): void {
      
  }

  saveSeller(){
   this.sellerService.createSeller(this.seller).subscribe(data =>{
    console.log(data);
    this.goToSellerList();
   },
   error=>console.log(error));
  }

  goToSellerList(){
    this.router.navigate(['/get-seller'])
  }


  OnSubmit(){
    this.saveSeller();
    console.log(this.seller);
  }
}
