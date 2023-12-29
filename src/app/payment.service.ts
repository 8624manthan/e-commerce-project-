import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
private addPayment="http://localhost:8181/api/payment/createPayment";
private getPayments="http://localhost:8181/api/payment/getAllPayments";
private getPayById="http://localhost:8181/api/payment/getPaymentById";
private editPayment="http://localhost:8181/api/payment/updatePayment";
private delPayment="http://localhost:8181/api/payment/deletePayment";
  constructor(private httpClient:HttpClient){ }

  createPayment(payment:Payment):Observable<Object>
  {
    return this.httpClient.post(`${this.addPayment}`, payment);
  }

  getAllPaymentList():Observable<Payment[]>
  {
    return this.httpClient.get<Payment[]>(`${this.getPayments}`);
  }

  getPaymentById(paymentId:number):Observable<Payment>
  {
    return this.httpClient.get<Payment>(`${this.getPayById}/${paymentId}/${paymentId}`);
  }

  updatePayment(paymentId:number, payment:Payment):Observable<Object>
  {
    return this.httpClient.put(`${this.editPayment}/${paymentId}`, payment);
  }

  deletePayment(paymentId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.delPayment}/${paymentId}`);
  }
}
