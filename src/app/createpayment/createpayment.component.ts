import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpayment',
  templateUrl: './createpayment.component.html',
  styleUrls: ['./createpayment.component.css']
})
export class CreatepaymentComponent implements OnInit{

  payment:Payment=new Payment();

  constructor(private paymentService:PaymentService, 
    private router:Router){}
  ngOnInit(): void {
      
  }
  savePayment(){
    this.paymentService.createPayment(this.payment).subscribe(data=>{
      console.log(data);
      this.goToPaymentList();
    },
    error =>console.log(error)
    )
  }

  goToPaymentList()
  {
    this.router.navigate(['/get-payment'])
    //  this.router.navigate(['/create-user'])

  }

    onSubmit()
    {
      this.savePayment();
    }

}
