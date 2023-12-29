import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css']
})
export class UpdateorderComponent implements OnInit{

  order:Order=new Order();
  orderId!:number;

constructor(private orderService:OrderService,
  private router: Router,
  private route:ActivatedRoute){}

  ngOnInit(): void {
   this.orderId=this.route.snapshot.params['orderId'];
   this.orderService.getOrderById(this.orderId).subscribe(data =>{
   this.order =data;
   },
   error=>console.log(error));
  }


  onSubmit()
  {
this.orderService.updateOrder(this.orderId,this.order).subscribe(data=>{
  console.log(data);
  this.goToorderList();
},
error=>console.log(error));
  }

  goToorderList()
  {
    this.router.navigate(['/get-order']);
  }


}
