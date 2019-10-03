import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/modelss/product.model';
import { Cart } from 'src/app/modelss/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[] = [];
  selectedProduct: Product = null;
  constructor( public cart: Cart,
               public router: Router) { }

  ngOnInit() {
  }

  addProductToCart(product: Product) {
    this.cart.addItem(product);
    this.router.navigateByUrl('/cart');
  }
  displayDetails(p?: Product) {
    this.selectedProduct = p;
  }
}
