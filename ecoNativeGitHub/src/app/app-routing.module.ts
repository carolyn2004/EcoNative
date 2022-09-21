import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateDeleteProductComponent } from './update-delete-product/update-delete-product.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import {AuthGuard} from './auth.guard';
import { AllOrdersComponent } from './all-orders/all-orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // {path: 'search/:searchTerm', component: HomeComponent},
  // redirect to home page on load
  { path: 'about', component: AboutComponent },
  { path: 'sign-up', component: SignUpComponent},
  // { path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'tag/:tag', component: HomeComponent},
  // {path: 'checkout', component: CheckoutPageComponent},
  // {path: 'summary', component: OrderSummaryComponent},
  {path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard], data:
  {permission: {only: ["user", "admin"]}}},
  // {path: 'order-summary', component: OrderSummaryComponent},
  // {path: 'add-product', component: AddProductComponent},
  // {path: 'update-product/:id', component: UpdateDeleteProductComponent},
  // {path: 'user-profile', component: UserProfileComponent},
  {path: 'buy-product', component: BuyProductComponent, canActivate: [AuthGuard], data:
  {permission: {only: ["user", "admin"]}}},
  {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard], data:
  {permission: {only: ["user", "admin"]}}},
  {path: 'order-details', component: OrderDetailsComponent, canActivate: [AuthGuard], data:
  {permission: {only: ["user", "admin"]}}},
  {path: 'all-orders', component: AllOrdersComponent, canActivate: [AuthGuard], data:
  {permission: {only: ["admin"]}}},
  { path: 'products/:_id', component: ProductComponent,
  

   pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
