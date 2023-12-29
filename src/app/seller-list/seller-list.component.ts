import { Component, OnInit } from '@angular/core';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit{

  seller:Seller[] | undefined

  constructor(private sellerService:SellerService, private router:Router){}
  ngOnInit(): void {
      this.getSellerList();
  }

  private getSellerList()
  {
    this.sellerService.getAllSellerList().subscribe(data=>{
      this.seller=data;
    });
  }

  updateSeller(sellerId:number)
  {
    this.router.navigate(['update-seller', sellerId])
  }
  
  deleteSeller(sellerId:number)
  {
    this.sellerService.deleteSeller(sellerId).subscribe(data=>{
      console.log(data);
      this.reloadComponent();
    },
    error=>console.log(error));
  }

  reloadComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.onSameUrlNavigation='reload';
    this.router.navigate(['/get-seller']);
  }

}


