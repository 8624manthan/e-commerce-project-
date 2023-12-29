import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order';
import { Observable } from 'rxjs';
import { Seller } from './seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private getSellers="http://localhost:8181/api/seller/getAllSellers";
  private getsellerById="http://localhost:8181/api/seller/getSellerId";
  private addSeller="http://localhost:8181/api/seller/createSeller";
  private editSeller="http://localhost:8181/api/seller/updateSeller";
  private delSeller="http://localhost:8181/api/seller/deleteSeller";

  constructor(private httpClient:HttpClient) { }

  createSeller(seller:Seller):Observable<Object>
  {
    return this.httpClient.post('${this.addSeller}',seller)
  }
  getAllSellerList():Observable<Seller[]>
  {
    return this.httpClient.get<Seller[]>(`${this.getSellers}`);
  }

  getSellerById(sellerId:number):Observable<Seller>
  {
    return this.httpClient.get<Seller>(`${this.getsellerById}/${sellerId}/${sellerId}`);
  }

  updateSeller(sellerId:number, seller:Seller):Observable<Object>
  {
    return this.httpClient.put(`${this.editSeller}/${sellerId}`, seller);
  }

  deleteSeller(sellerId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.delSeller}/${sellerId}`);
  }
}
