import { Component, OnInit } from '@angular/core';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateseller',
  templateUrl: './updateseller.component.html',
  styleUrls: ['./updateseller.component.css']
})
export class UpdatesellerComponent implements OnInit {
  seller:Seller=new Seller();
  sellerId!:number;

constructor(private sellerService:SellerService,
  private router: Router,
  private route:ActivatedRoute){}

  ngOnInit(): void {
   this.sellerId=this.route.snapshot.params['sellerId'];
   this.sellerService.getSellerById(this.sellerId).subscribe(data=>{
   this.seller =data;
   },
   error=>console.log(error));
  }


  onSubmit()
  {
this.sellerService.updateSeller(this.sellerId,this.seller).subscribe(data=>{
  console.log(data);
  this.goTosellerList();
},
error=>console.log(error));
  }

  goTosellerList()
  {
    this.router.navigate(['/home']);
  }




}
