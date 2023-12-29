import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  product:Product[] | undefined

  constructor(private productService:ProductService, private router:Router){}
  ngOnInit(): void {
      this.getProductList();
  }

  private getProductList()
  {
    this.productService.getAllProductList().subscribe(data=>{
      this.product=data;
    });
  }

  updateProduct(productid:number)
  {
    this.router.navigate(['update-product', productid])
  }
  
  deleteProduct(productid:number)
  {
    this.productService.deleteProduct(productid).subscribe(data=>{
      console.log(data);
      this.reloadComponent();
    },
    error=>console.log(error));
  }

  reloadComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.onSameUrlNavigation='reload';
    this.router.navigate(['/get-peoduct']);
  }

}

