import { NavbarService } from './services/navbar.service';
import { CategoryService } from './services/category.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { WishlistService } from './services/wishlist.service';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShippingFormComponent } from './checkout/shipping-form/shipping-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductWishlistComponent } from './product-wishlist/product-wishlist.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSummaryComponent } from './checkout/order-summary/order-summary.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { WishlistDetailComponent } from './wishlist-detail/wishlist-detail.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductUpdateComponent } from './product-update/product-update.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    ManageProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductWishlistComponent,
    ProductCartComponent,
    OrderSuccessComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    OrderSummaryComponent,
    ShippingFormComponent,
    ManageOrderComponent,
    WishlistDetailComponent,
    HomeComponent,
    FooterComponent,
    MyOrdersComponent,
    ProductUpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    Ng2SearchPipeModule,
    RouterModule.forRoot([
      
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'product-detail/:id',
        component: ProductDetailComponent
      },
      {
        path: 'product-cart',
        component: ProductCartComponent
      },
      {
        path: 'wishlist-detail/:id',
        component: WishlistDetailComponent
      },
      {
        path: 'product-wishlist',
        component: ProductWishlistComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },



      {
        path: 'shipping-form',
        component: ShippingFormComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'my-orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuardService]
      },




      {
        path: 'manage-product',
        component: ManageProductComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'product-list',
        component: ProductListComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'product-update',
        component: ProductUpdateComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'manage-order',
        component: ManageOrderComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      }


    ])
  ],
  providers: [
    ProductService,
    OrderService,
    CartService,
    WishlistService,
    LoginService,
    RegisterService,
    AuthGuardService,
    AdminAuthGuardService,
    CategoryService,
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
