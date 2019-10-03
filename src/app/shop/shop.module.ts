import { NgModule } from '@angular/core';
import { ModelModule } from '../modelss/model.module';
import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';


const routes: Routes = [
    {path: 'product-detail/:id', component: ProductDetailComponent}
  ];
@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule.forChild(routes)],
    providers: [],
    declarations: [ShopComponent,
                   NavbarComponent,
                   CartSummaryComponent,
                   CartDetailComponent,
                   CheckoutComponent,
                   ProductListComponent,
                   CategoryListComponent,
                   ProductDetailComponent],
    exports: [ShopComponent, CartDetailComponent, CheckoutComponent, RouterModule]
})
export class ShopModule {}