import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private addproduct="http://localhost:8181/api/product/createproduct";
  private getproducts="http://localhost:8181/api/product/getAllproducts";
  private getprodById="http://localhost:8181/api/product/getproductById";
  private editproduct="http://localhost:8181/api/product/updateproduct";
  private delproduct="http://localhost:8181/api/product/deleteproduct";

  
    constructor(private httpClient:HttpClient){ }
  
    createProduct(product:Product):Observable<Object>
    {
      return this.httpClient.post(`${this.addproduct}`, product);
    }
  
    getAllProductList():Observable<Product[]>
    {
      return this.httpClient.get<Product[]>(`${this.getproducts}`);
    }
  
    getProductById(productid:number):Observable<Product>
    {
      return this.httpClient.get<Product>(`${this.getprodById}/${productid}/${productid}`);
    }
  
    updateProduct(productid:number, product:Product):Observable<Object>
    {
      return this.httpClient.put(`${this.editproduct}/${productid}`, product);
    }
  
    deleteProduct(productid:number):Observable<Object>
    {
      return this.httpClient.delete(`${this.delproduct}/${productid}`);
    }
}
