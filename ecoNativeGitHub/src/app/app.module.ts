import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TagsComponent } from './tags/tags.component';
import { FooterComponent } from './footer/footer.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OrderItemsListComponent } from './order-items-list/order-items-list.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateDeleteProductComponent } from './update-delete-product/update-delete-product.component';
import { OrderService } from './order.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { OrdersComponent } from './orders/orders.component';
import { MapComponent } from './map/map.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    ProductComponent,
    SearchComponent,
    CartComponent,
    LoginComponent,
    NotFoundComponent,
    CarouselComponent,
    TagsComponent,
    FooterComponent,
    CheckoutPageComponent,
    FeedbackComponent,
    OrderItemsListComponent,
    OrderSummaryComponent,
    FavoritesComponent,
    AddProductComponent,
    UpdateDeleteProductComponent,
    UserProfileComponent,
    BuyProductComponent,
    OrdersComponent,
    MapComponent,
    OrderDetailsComponent,
    AllOrdersComponent,
    
 
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule
 
   
    
  ],

  providers: [OrderService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
