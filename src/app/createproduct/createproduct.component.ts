import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit{

  Productcolors=[{id:0,color:"red"},{id:1,color:"white"},{id:2,color:"black"},{id:3,color:"purple"},
  {id:4,color:"green"},{id:5,color:"blue"}];

  product:Product=new Product();

  constructor(private productService:ProductService, private router:Router){}
  ngOnInit(): void {
     
  }
  saveProduct(){
    this.productService.createProduct(this.product).subscribe(data=>{
      console.log(data);
      this.goToProductList();
    })
  }

  goToProductList()
  {
    // this.router.navigate(['/home'])
     this.router.navigate(['/get-product'])

  }

    onSubmit()
    {
      this.saveProduct();
      console.log(this.product)
    }

}

