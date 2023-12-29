import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit{

  order:Order=new Order();

  constructor(private orderService:OrderService,
    private router:Router){}

  ngOnInit(): void {
      
  }

  saveOrder(){
    this.orderService.createOrder(this.order).subscribe(data =>{
      console.log(data);
      this.goToOrderList();
    },
    error =>console.log(error)
    )
  }

  goToOrderList(){
    this.router.navigate(['/home'])
  }

  onSubmit(){
    this.saveOrder();
    console.log(this.order)
  }
}
