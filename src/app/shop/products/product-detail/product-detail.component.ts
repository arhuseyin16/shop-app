import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/modelss/product.model';
import { Cart } from 'src/app/modelss/cart.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductRepository } from 'src/app/modelss/product.repository';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() products: Product;
  product: Product = new Product();
  selectedProduct: Product = null;

  constructor( public cart: Cart,
               public router: Router,
               private activeRoute: ActivatedRoute,
               private productRepository: ProductRepository)
  {}

  ngOnInit() {
    const pId = this.activeRoute.snapshot.params['id'];
    this.product = this.productRepository.getProductId(pId);
    this.selectedProduct = this.product;
    }

  addProductToCart(product: Product) {
      this.cart.addItem(product);
      this.router.navigateByUrl('/cart');
    }

  cancel() {
     this.router.navigateByUrl('/shop');
    }
}
