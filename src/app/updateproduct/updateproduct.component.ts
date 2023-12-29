import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  product:Product=new Product();
  productid!:number;

constructor(private productService:ProductService,
  private router: Router,
  private route:ActivatedRoute){}

  ngOnInit(): void {
   this.productid=this.route.snapshot.params['productid'];
   this.productService.getProductById(this.productid).subscribe(data=>{
   this.product =data;
   },
   error=>console.log(error));
  }


  onSubmit()
  {
this.productService.updateProduct(this.productid,this.product).subscribe(data=>{
  console.log(data);
  this.goToproductList();
},
error=>console.log(error));
  }

  goToproductList()
  {
    this.router.navigate(['/home']);
  }




}
