import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { CreatepaymentComponent } from './createpayment/createpayment.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { CreateadminComponent } from './createadmin/createadmin.component';
import { HomeComponent } from './home/home.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdatepaymentComponent } from './updatepayment/updatepayment.component';
import { CreateorderComponent } from './createorder/createorder.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CreatesellerComponent } from './createseller/createseller.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { UpdatesellerComponent } from './updateseller/updateseller.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {path: 'create-user', component:CreateuserComponent},
  {path: 'get-user', component:UserListComponent},
  {path:'update-user/:userId',component:UpdateuserComponent},
  
  // {path:'' ,redirectTo:'/get-user',pathMatch:'full'},

  {path:'create-payment',component:CreatepaymentComponent},
  {path:'get-payment',component:PaymentListComponent},
  {path:'update-payment/:paymentId',component:UpdatepaymentComponent},

  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  // {path:'' ,redirectTo:'/get-seller',pathMatch:'full'},
  {path:'get-seller',component:SellerListComponent},
  {path:'create-seller',component:CreatesellerComponent},
  {path:'update-seller/:sellerId',component:UpdatesellerComponent},

  {path:'create-admin',component:CreateadminComponent},

  {path:'create-product',component:CreateproductComponent},
  {path:'get-product',component:ProductListComponent},
  {path:'update-product/:productid',component:UpdateproductComponent},

  {path:'create-order',component:CreateorderComponent},
  {path:'update-order/:orderId',component:UpdateorderComponent},
  {path:'get-order',component:OrderListComponent},

  {path:'create-category',component:CreatecategoryComponent},
  {path:'get-category',component:CategoryListComponent},
  {path:'update-category/:categoryId',component:UpdatecategoryComponent},

  {path:'register-user',component:RegisterComponent},
  {path:'login-user',component:LoginComponent},

  {path:'login-admin',component:AdminLoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
