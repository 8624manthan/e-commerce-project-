import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-create-seller',
  templateUrl: './create-seller.component.html',
  styleUrls: ['./create-seller.component.css']
})
export class CreateSellerComponent {
  
  seller:Seller=new Seller();

  constructor(private sellerService:SellerService,
     private router:Router){}
  ngOnInit(): void {
      
  }
  saveSeller(){
    this.sellerService.createSeller(this.seller).subscribe(data=>{
      console.log(data);
      this.goToSellerList();
    })
  }

  goToSellerList()
  {
    // this.router.navigate(['/get-Seller'])
    this.router.navigate(['/home']);
  }
  onSubmit()
  {
    this.saveSeller();
  }
}