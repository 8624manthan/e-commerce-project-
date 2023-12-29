import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit{

  order:Order[] |undefined

  constructor(private orderService:OrderService,
    private router:Router) {}

    ngOnInit(): void {
        this.getOrderList();
    }

  private getOrderList(){
    this.orderService.getAllOrderList().subscribe(data =>{
      this.order=data;
    })

  

 
  }
  updateOrder(orderId:Number)
  {
    this.router.navigate(['update-order',orderId])
  }

  deleteOrder(orderId:number)
  {
    this.orderService.deleteOrder(orderId).subscribe(data=>{
      console.log(data);
      this.reloadComponent();
    },
    error=>console.log(error));
  }
   reloadComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.onSameUrlNavigation='reload';
    this.router.navigate(['/get-order']);
  }
}
