import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private addOrder="http://localhost:8181/api/order/createOrder";
  private getOrders="http://localhost:8181/api/order/getAllorder";
  private getorderById="http://localhost:8181/api/order/getorderById";
  private editOrder="http://localhost:8181/api/order/updateorder";
  private delOrder="http://localhost:8181/api/order/deleteorder";

  constructor(private httpClient:HttpClient) { }

  createOrder(order:Order):Observable<Object>
  {
    return this.httpClient.post(`${this.addOrder}`,order);
  }

  getAllOrderList():Observable<Order[]>
    {
      return this.httpClient.get<Order[]>(`${this.getOrders}`);
    }
  
    getOrderById(orderId:number):Observable<Order>
    {
      return this.httpClient.get<Order>(`${this.getorderById}/${orderId}/${orderId}`);
    }

    updateOrder(orderId:number, order:Order):Observable<Object>
    {
      return this.httpClient.put(`${this.editOrder}/${orderId}`, order);
    }
  
    deleteOrder(orderId:number):Observable<Object>
    {
      return this.httpClient.delete(`${this.delOrder}/${orderId}`);
    }
}

