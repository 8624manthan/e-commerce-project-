import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateuserComponent } from './createuser/createuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { CreatepaymentComponent } from './createpayment/createpayment.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { CreateadminComponent } from './createadmin/createadmin.component';
import { HomeComponent } from './home/home.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdatepaymentComponent } from './updatepayment/updatepayment.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { CreateorderComponent } from './createorder/createorder.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CreatesellerComponent } from './createseller/createseller.component';
import { UpdatesellerComponent } from './updateseller/updateseller.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CreateSellerComponent } from './create-seller/create-seller.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateuserComponent,
    UpdateuserComponent,
    CreatepaymentComponent,
    PaymentListComponent,
    UpdatepaymentComponent,
    CreateadminComponent,
    HomeComponent,
    CreateproductComponent,
    ProductListComponent,
    UpdateproductComponent,
    CreateorderComponent,
    UpdateorderComponent,
    OrderListComponent,
    CreatesellerComponent,
    UpdatesellerComponent,
    SellerListComponent,
    CreatecategoryComponent,
    CategoryListComponent,
    UpdatecategoryComponent,
    RegisterComponent,
    LoginComponent,
    AdminLoginComponent,
    CreateSellerComponent,
    AdminhomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
